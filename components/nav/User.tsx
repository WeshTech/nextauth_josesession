"use client";

import Image from "next/image";

const User = () => {
  return (
    <div>
        <Image
            src = "/user.jpg"
            alt = "user"
            className="rounded-full cursor-pointer"
            width = {35}
            height={35}
        />
    </div>
  )
}

export default User