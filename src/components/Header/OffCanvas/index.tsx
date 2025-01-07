'use client'

import React from 'react'
import Link from 'next/link'

interface OffCanvasProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function OffCanvas({ isMenuOpen, toggleMenu }: OffCanvasProps) {
  return (
    <div
      className={`fixed inset-0 z-[90] h-screen w-screen bg-zinc-950 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="relative flex h-full w-full flex-col justify-between p-12">
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="group absolute top-4 right-12 flex cursor-pointer items-center gap-x-2"
        >
          <span className="text-sm font-semibold text-stone-300 uppercase transition-colors duration-300 group-hover:text-white">
            Close
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-white">
            <span className="relative h-4 w-4">
              <span className="absolute top-1/2 left-0 h-[1.5px] w-4 -translate-y-1/2 rotate-45 bg-white transition-colors duration-300 group-hover:bg-zinc-950"></span>
              <span className="absolute top-1/2 left-0 h-[1.5px] w-4 -translate-y-1/2 -rotate-45 bg-white transition-colors duration-300 group-hover:bg-zinc-950"></span>
            </span>
          </div>
        </button>

        {/* Navigation */}
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex flex-col gap-y-8 text-[7rem] leading-none">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="" className="group relative whitespace-nowrap" onClick={toggleMenu}>
                <span className="group-hover:text-brand-gold font-bold text-stone-300 transition-colors duration-300">
                  OUR WORK
                </span>
                <span className="ml-2 text-xs text-stone-500">(200+)</span>
                <span className="group-hover:bg-brand-gold absolute -bottom-1 left-0 h-1 w-full bg-stone-300 transition-colors duration-300"></span>
              </a>
              <span className="h-1.5 w-24 bg-stone-600"></span>
              <a href="" className="group relative whitespace-nowrap" onClick={toggleMenu}>
                <span className="group-hover:text-brand-gold font-bold text-stone-300 transition-colors duration-300">
                  SERVICES
                </span>
                <span className="group-hover:bg-brand-gold absolute -bottom-1 left-0 h-1 w-full bg-stone-300 transition-colors duration-300"></span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="" className="group relative whitespace-nowrap" onClick={toggleMenu}>
                <span className="group-hover:text-brand-gold font-bold text-stone-300 transition-colors duration-300">
                  ABOUT
                </span>
                <span className="ml-2 text-xs text-stone-500">(☺ 200+)</span>
                <span className="group-hover:bg-brand-gold absolute -bottom-1 left-0 h-1 w-full bg-stone-300 transition-colors duration-300"></span>
              </a>
              <span className="h-1.5 w-24 bg-stone-600"></span>
              <a href="" className="group relative whitespace-nowrap" onClick={toggleMenu}>
                <span className="group-hover:text-brand-gold font-bold text-stone-300 transition-colors duration-300">
                  JOURNAL
                </span>
                <span className="group-hover:bg-brand-gold absolute -bottom-1 left-0 h-1 w-full bg-stone-300 transition-colors duration-300"></span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="" className="group relative whitespace-nowrap" onClick={toggleMenu}>
                <span className="group-hover:text-brand-gold font-bold text-stone-300 transition-colors duration-300">
                  WHY US
                </span>
                <span className="group-hover:bg-brand-gold absolute -bottom-1 left-0 h-1 w-full bg-stone-300 transition-colors duration-300"></span>
              </a>
              <span className="h-1.5 w-24 bg-stone-600"></span>
              <a href="" className="group relative whitespace-nowrap" onClick={toggleMenu}>
                <span className="group-hover:text-brand-gold font-bold text-stone-300 transition-colors duration-300">
                  CONTACT
                </span>
                <span className="group-hover:bg-brand-gold absolute -bottom-1 left-0 h-1 w-full bg-stone-300 transition-colors duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase">
          <div className="flex items-center gap-x-4">
            <span>© 2025 Brewww, LLC. All Rights Reserved.</span>
            <span>/</span>
            <div className="flex items-center gap-x-4">
              <a href="">FB</a>
              <a href="">X</a>
              <a href="">IG</a>
              <a href="">LI</a>
              <a href="">GH</a>
              <a href="">DR</a>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <a href="">Security</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
