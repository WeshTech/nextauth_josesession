"use client";

interface HeaderProps {
    label: string,
    subText: string,
}

export const formheader = ({
  label,
  subText,
}: HeaderProps) => {
  return (
    <div className="flex items-center justify-center">
        <h1 className="text-gradient-to-r from-blue-500 via-rose-400 to-black
            text-xl
        ">
          {label}
        </h1>
        <p>
          {subText}
        </p>
    </div>
  )
}

