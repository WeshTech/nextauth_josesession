import { FaSquareGithub } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

const Socials = () => {
  return (
    <div className="flex gap-2">
        <div className="w-full bg-white flex items-center justify-center rounded-md p-2">
            <FcGoogle size={40} />
        </div>

        <div className="w-full bg-white flex items-center justify-center rounded-md p-2">
            <FaSquareGithub size={40} />
        </div>
    </div>
  )
}

export default Socials