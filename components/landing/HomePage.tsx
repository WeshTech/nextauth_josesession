"use client";

import { FaIdCardClip } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center w-full">
        <div className="flex flex-col space-y-5 w-full h-full max-w-[600px] bg-gray-500 p-4 mt-16 mx-4 md:mt-24 lg:mt-28 rounded-md border">
            <div className="flex items-center justify-center">
                <p
                  className="text-2xl text-white"
                >🔐Authenticaton app</p>
            </div>

            <div className="flex items-center">
              <span className="text-xl mx-2 text-rose-500"><FaIdCardClip size={25} /></span> 
                <p
                  className="text-xl text-white"
                  >
                  Credential Login
                </p>
            </div>

            <div className="flex items-center">
              <span className="text-xl mx-2 text-rose-500"><GrGoogle size={25} /></span> 
                <p
                  className="text-xl text-white"
                  >
                  Google Login
                </p>
            </div>

            <div className="flex items-center">
              <span className="text-xl mx-2 text-rose-500"><FaGithubSquare size={25} /></span> 
                <p
                  className="text-xl text-white"
                  >
                  Github Login
                </p>
            </div>

            <div className="flex items-center">
              <span className="text-xl mx-2 text-rose-500"><LuMouse size={25} /></span> 
                <p
                  className="text-xl text-white"
                  >
                  Session Management
                </p>
            </div>
            
            <div className="flex items-center">
              <span className="text-xl mx-2 text-rose-500"><RxDashboard size={25} /></span> 
                <p
                  className="text-xl text-white"
                  >
                  Dashboard
                </p>
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-rose-500 p-2 rounded-md text-white w-1/2 my-6 shadow-sm">
                <Link href = "/auth/login">Explore</Link>
              </button>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage