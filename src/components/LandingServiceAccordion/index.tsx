"use client";

import Image from "next/image";
import { useState } from "react";
import type { Media } from '@/payload-types'

interface LandingServiceAccordionProps {
  id: string;
  serviceName: string;
  description: string;
  tools: string[];
  image1: string | Media;
  image2: string | Media;
}

export function LandingServiceAccordion({
  id,
  serviceName,
  description,
  tools = [],
  image1,
  image2,
}: LandingServiceAccordionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const image1Url = typeof image1 === 'string' 
    ? image1 
    : image1?.sizes?.full?.url || image1?.url || '';

  const image2Url = typeof image2 === 'string'
    ? image2
    : image2?.sizes?.full?.url || image2?.url || '';

  return (
    <div className="relative">
      <div className="relative h-[600px] w-full">
        {/* Main Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered || isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image src={image1Url} alt={serviceName} fill className="object-cover" />
        </div>
        {/* Hover/Active Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered || isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={image2Url} alt={`${serviceName} hover`} fill className="object-cover" />
        </div>
      </div>

      <div
        className="relative cursor-pointer border-b border-zinc-200 py-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-medium text-black">{serviceName}</span>
          </div>
          <span className="text-xl text-black">{isOpen ? "−" : "+"}</span>
        </div>

        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pb-6 pt-2">
              <p className="mb-4 text-zinc-600">{description}</p>
              {tools.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
