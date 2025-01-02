"use client";

import Link from "next/link";
import Container from "../Container";
import Input from "./Input";
import Socials from "./Socials";

const RegisterForm = () => {
  return (
    <Container>
      <div className="flex items-center justify-center">
          <div className="mt-16 w-full md:mt-24 lg:mt-28 flex items-center justify-center p-6 border rounded-xl max-w-[600px] h-full bg-gray-400 text-black">
            <form className="w-full">
              <div className="flex flex-col gap-6 w-full">
                {/* Name Field */}
                <div className="flex flex-col gap-2 w-full">
                  <Input 
                    name="name"
                    placeholder="your name"
                    required
                    label="Name"
                    
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2 w-full">
                <Input 
                    name="email"
                    placeholder="your email"
                    required
                    label="Email"
                    
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2 w-full">
                <Input 
                    name="password"
                    placeholder="your password"
                    required
                    label="Password"
                    
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col gap-2 w-full">
                <Input 
                    name="confirmPassword"
                    placeholder="confirm password"
                    required
                    label="Confirm Passwrd"
                    
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-rose-500 text-white font-semibold h-12 rounded-lg p-3 w-full hover:bg-rose-600 transition-all duration-200"
                >
                  Register
                </button>

                <Socials />

                <div className="flex gap-2 items-center justify-center">
                  <Link 
                    href="/auth/login"
                    className=""
                  > 
                    Already have an account?
                  </Link>
                  <span className="text-lg text-white underline ">Sign In</span>
                </div>

              </div>
            </form>
          </div>  
      </div>
    </Container>
  );
};

export default RegisterForm;
