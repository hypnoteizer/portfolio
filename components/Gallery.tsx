"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({
  images,
  basePath,
}: {
  images: string[];
  basePath: string;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={`${basePath}/${image}`}
              alt=""
              fill
              className="object-cover hover:opacity-80 transition-opacity"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={`${basePath}/${selectedImage}`}
            alt=""
            width={1200}
            height={1200}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
}