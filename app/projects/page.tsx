"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image paths from 1 to 107
  const images = Array.from(
    { length: 107 },
    (_, i) => `/sml-images/${i + 1}.jpg`
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white py-24 px-4 lg:px-6">
      <div className="container mx-auto">
        <Link href="/">
          <Button variant="outline" className="mb-8">
            ← Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Our Projects</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => {
                setSelectedImage(src);
                setCurrentIndex(index);
              }}
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Image Popup */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-black/95">
            <div className="relative aspect-[4/3] w-full">
              {selectedImage && (
                <Image
                  src={images[currentIndex]}
                  alt={`Project ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                />
              )}

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
