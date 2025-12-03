"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getSupabaseImageUrl } from "@/lib/supabase/storage";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./PhotosDialog.module.css";

interface PhotosDialogProps {
  photos: string[] | null;
}

export default function PhotosDialog({ photos }: PhotosDialogProps) {
  const [isPhotoDialogOpen, setIsPhotoDialogOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mechanicPhotos =
    photos?.map((photo) => {
      if (photo.startsWith("http")) {
        return photo;
      }
      return getSupabaseImageUrl(photo);
    }) || [];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % mechanicPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mechanicPhotos.length) % mechanicPhotos.length
    );
  };

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Dialog open={isPhotoDialogOpen} onOpenChange={setIsPhotoDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className={styles.dialogCta}>
            <ImageIcon size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className={styles.dialogContent}>
          <DialogTitle>
            <div className={styles.header}>
              <h3 className={styles.title}>Fotos da Oficina</h3>
              <span className={styles.counter}>
                {currentIndex + 1} de {mechanicPhotos.length}
              </span>
            </div>
          </DialogTitle>
          <div className={styles.carouselContainer}>
            <div className={styles.mainPhotoContainer}>
              <Button
                variant="outline"
                size="sm"
                className={styles.navButton}
                onClick={prevPhoto}
                disabled={mechanicPhotos.length <= 1}
              >
                <ChevronLeft size={20} />
              </Button>

              <div className={styles.mainPhoto}>
                <Image
                  src={mechanicPhotos[currentIndex]}
                  alt={`Foto da oficina ${currentIndex + 1}`}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 600px"
                  fill
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                className={styles.navButton}
                onClick={nextPhoto}
                disabled={mechanicPhotos.length <= 1}
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {mechanicPhotos.length > 1 && (
              <div className={styles.thumbnails}>
                {mechanicPhotos.map((photo, index) => (
                  <button
                    key={index}
                    className={`${styles.thumbnail} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                    onClick={() => goToPhoto(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className={styles.thumbnailImage}
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
