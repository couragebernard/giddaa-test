"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image';

const gallery: string[] = ["/images/hero6.png", "/images/hero2.jpeg", "/images/hero1.jpeg", "/images/hero3.jpeg", "/images/hero4.jpeg", "/images/hero5.jpeg"]

const ImageGallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  return (
    <div
      ref={scrollRef}
      className="w-full max-w-[1087px] flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
      style={{ whiteSpace: "nowrap", scrollBehavior: "smooth" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {gallery.map((img, i) => (
        <div
          key={i}
          className="flex-shrink-0 md:w-96 w-full h-64 p-2 flex justify-center items-center snap-start"
        >
          <Image
            src={img}
            alt={`Gallery item ${i}`}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery