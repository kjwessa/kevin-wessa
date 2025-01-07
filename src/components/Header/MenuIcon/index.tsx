import React from 'react'

interface MenuIconProps {
  isOpen: boolean
}

export default function MenuIcon({ isOpen }: MenuIconProps) {
  return (
    <svg
      width="24"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-300 ease-in-out"
    >
      {isOpen ? (
        <>
          <path
            d="M9.87871 14.1213L12 12M14.1213 9.87868L12 12M12 12L9.87871 9.87868M12 12L14.1213 14.1213"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 ease-in-out group-hover:stroke-zinc-950"
          />
          <path
            d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 ease-in-out group-hover:stroke-zinc-950"
          />
        </>
      ) : (
        <>
          <path
            d="M4 10H20"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 ease-in-out group-hover:stroke-zinc-950"
          />
          <path
            d="M4 14H20"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 ease-in-out group-hover:stroke-zinc-950"
          />
        </>
      )}
    </svg>
  )
}
