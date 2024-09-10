import { useState } from "react"
import { Link } from "react-router-dom"
import ThemeButton from "./ThemeButton"
import HamburgerButton from "./HamburgerButton"

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentTheme, setCurrentTheme] = useState("dark")

    function changeExpanded() {
        if (isExpanded) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }
    }

    return (
        <nav className="fixed top-0 z-10 flex flex-col md:flex-row w-full justify-center items-center md:h-14 md:h-20  
        bg-background/80 backdrop-blur-sm text-primary">
            <div className="w-full md:w-auto flex justify-end md:justify-around">
                <ThemeButton currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
                <HamburgerButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            </div>

            {/* Desktop nav */}
            <ul className="hidden md:flex md:flex-row md:w-auto md:gap-6 md:mr-10 text-center">
                <li className="md:border-none md:px-0 "><Link to="/">Filip Urzoń</Link></li>
                <li className="md:border-none md:px-0 "><Link to="/projects">Projects</Link></li>
                <li className="md:border-none md:px-0 "><Link to="/skills">Skills</Link></li>
                {/* <li className="py-20 border md:border-none md:px-0 "><Link to="/contact">Contact</Link></li> */}
            </ul>

            {/* Mobile nav */}

            <ul className={isExpanded ? "flex flex-col md:hidden mt-2 w-full text-center" : "hidden"}>
                <Link to="/" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Filip Urzoń</li></Link>
                <Link to="/projects" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Projects</li></Link>
                <Link to="/skills" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Skills</li></Link>
                {/* <Link to="/contact" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Contact</li></Link> */}
            </ul>

        </nav >
    )
}