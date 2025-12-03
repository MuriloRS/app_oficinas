"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default function TalkToSpecialist() {
  return (
    <Button
      onClick={() => {
        window.location.href = ROUTES.SEARCH;
      }}
      variant="secondary"
      className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
    >
      Falar com Especialista
    </Button>
  );
}
