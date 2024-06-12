import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h3 className=" flex mx-2 w-10 font-bold text-2xl">Kz</h3>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar