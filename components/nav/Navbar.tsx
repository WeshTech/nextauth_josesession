"use client";

import Container from "../Container";
import Logo from "./Logo";
import Notifications from "./Notifications";
import User from "./User";

const Navbar = () => {
  return (
    <nav>
        <div className="fixed shadow-md bg-rose-300 w-full z-50">
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <Logo />
                    </div>
                    <div className="flex gap-4 items-center">
                        <Notifications />
                        <User />
                    </div>
                </div>
            </Container>
        </div>
    </nav>
  )
}

export default Navbar