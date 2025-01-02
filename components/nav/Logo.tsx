"use client";

import Image from "next/image"
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
})

const Logo = () => {
  return (
    <div className="
      flex 
      gap-1 sm:gap-2 md:gap-3
      items-center 
      text-black">
        <Image 
            src = "/logo.jpg"
            alt = "Logo"
            height={60}
            width={40}
            className="
              rounded-lg 
              m-2 
              cursor-pointer
              sm:h-16 lg:h-20
              sm:w-16 lg:w-20
            "
        />

        <p className = {`${poppins.className} 
                          antialiased 
                          cursor-pointer 
                          text-base sm:text-lg md:text-xl lg:text-2xl
                          `}>
          Wesh Secure Auth
        </p>
    </div>
  )
}

export default Logo