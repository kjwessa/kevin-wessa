'use client'

import React from 'react'
import MenuIcon from '../MenuIcon'

interface MenuButtonProps {
  isOpen: boolean
  toggleMenu: () => void
}

export default function MenuButton({ isOpen, toggleMenu }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="group h-12 w-12 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-white"
    >
      <span className="flex h-full w-full items-center justify-center">
        <MenuIcon isOpen={isOpen} />
      </span>
    </button>
  )
}
