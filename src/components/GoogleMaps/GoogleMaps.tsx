"use client";

import { Mechanic } from "@/features/SearchMechanics/MechanicsList/MechanicsList.type";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";
import styles from "./GoogleMaps.module.css";

interface GoogleMapsProps {
  mechanics: Mechanic[];
  onMechanicSelect?: (mechanic: Mechanic) => void;
}

const DEFAULT_CENTER = { lat: -29.7194466, lng: -52.4275629 };

export default function GoogleMaps({
  mechanics,
  onMechanicSelect,
}: GoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [markers, setMarkers] = useState<
    google.maps.marker.AdvancedMarkerElement[]
  >([]);

  const redirectToMechanicPage = (mechanicId: number) => {
    window.location.href = `/oficina/${mechanicId}`;
  };

  useEffect(() => {
    const initMap = async () => {
      try {
        setError(null);

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

        if (!apiKey || !mapId) {
          throw new Error(
            "Google Maps API key or Map ID is not set. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY and NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID to your .env.local file."
          );
        }
        const loader = new Loader({
          apiKey,
          version: "weekly",
          libraries: ["places", "marker"],
        });

        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement, PinElement } =
          await loader.importLibrary("marker");

        if (!mapRef.current) return;

        const mapInstance = new Map(mapRef.current, {
          center: DEFAULT_CENTER,
          zoom: 18,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
          cameraControl: false,
          clickableIcons: false,
          disableDefaultUI: false,
          disableDoubleClickZoom: false,
          mapId,
        });

        const newMarkers: google.maps.marker.AdvancedMarkerElement[] = [];

        for (const mechanic of mechanics) {
          try {
            const position = { lat: mechanic.lat, lng: mechanic.lng };

            const pinElement = new PinElement({
              background: "#EF4444",
              borderColor: "#DC2626",
              glyphColor: "#FFFFFF",
              scale: 1.8,
            });

            const marker = new AdvancedMarkerElement({
              position,
              map: mapInstance,
              title: mechanic.name,
              content: pinElement.element,
            });

            const infoContent = document.createElement("div");
            infoContent.style.padding = "8px";
            infoContent.style.minWidth = "200px";
            infoContent.innerHTML = `
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 18px;"><b>${
                mechanic.name
              }</b></h3>
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 15px;">${
                mechanic.location
              }</p>
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 15px;">⭐ ${
                mechanic.rating
              }/5</p>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                ${mechanic.services
                  .slice(0, 3)
                  .map(
                    (service) =>
                      `<span style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 12px; color: #374151;">${service}</span>`
                  )
                  .join("")}
              </div>
              <button id="ver-mais-btn-${
                mechanic.id
              }" style="width:100%; margin-top: 15px; border-radius:10px; font-size: 16px; font-weight: 500; cursor:pointer; padding: 10px; background-color: #EF4444; color: #FFFFFF;">Ver mais</button>
            `;

            const button = infoContent.querySelector(
              `#ver-mais-btn-${mechanic.id}`
            );
            if (button) {
              button.addEventListener("click", () => {
                redirectToMechanicPage(mechanic.id);
              });
            }

            const infoWindow = new google.maps.InfoWindow({
              maxWidth: 300,
              headerDisabled: true,
              disableAutoPan: false,
              content: infoContent,
            });

            marker.addListener("click", (event: google.maps.MapMouseEvent) => {
              event.stop();

              infoWindow.open(mapInstance, marker);

              if (onMechanicSelect) {
                onMechanicSelect(mechanic);
              }
            });

            newMarkers.push(marker);
          } catch (error) {
            console.error(`Error creating marker for ${mechanic.name}:`, error);
          }
        }

        setMarkers(newMarkers);

        if (newMarkers.length > 0) {
          const bounds = new google.maps.LatLngBounds();
          newMarkers.forEach((marker) => {
            const position = marker.position;
            if (position) bounds.extend(position);
          });
          mapInstance.fitBounds(bounds);
        }
      } catch (err) {
        console.error("Error loading Google Maps:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load Google Maps. Please check your API key and try again."
        );
      }
    };

    if (mechanics.length > 0) {
      initMap();
    }

    return () => {
      markers.forEach((marker) => (marker.map = null));
    };
  }, [mechanics, onMechanicSelect]);

  if (error) {
    return (
      <div className={`${styles.errorContainer}`}>
        <p className={styles.errorText}>{error}</p>
        <p className={styles.errorHint}>
          Make sure you have set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY and
          NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID in your environment variables.
        </p>
      </div>
    );
  }

  return (
    <div className={`${styles.mapContainer}`}>
      <div ref={mapRef} id="Maps" className={styles.map} />
      <div className={styles.mapControls}>
        <div className={styles.mapInfo}>
          <span className={styles.mechanicsCount}>
            {mechanics.length} oficina{mechanics.length !== 1 ? "s" : ""}{" "}
            encontrada{mechanics.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
