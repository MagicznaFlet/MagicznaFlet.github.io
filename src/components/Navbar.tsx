import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props: any) {
    const [isExpanded, setIsExpanded] = useState(true)
    const [currentTheme, setCurrentTheme] = useState("dark")

    function changeTheme() {
        if (currentTheme == "dark") {
            setCurrentTheme("light")
            document.body.classList.replace("dark", "light")
        } else {
            setCurrentTheme("dark")
            document.body.classList.replace("light", "dark")
        }
    }

    function changeExpanded() {
        if (isExpanded) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }
    }

    return (
        <nav className=" sticky top-0 z-10 flex flex-col md:flex-row w-full justify-center items-center md:h-14 md:h-20  
        bg-background/80 backdrop-blur-lg  text-primary">
            <div className="w-full md:w-auto flex justify-around">
                <div className={isExpanded ? "w-20 h-20 text-center bg-red-700" : "w-20 h-20 text-center bg-blue-700"}>
                    <button onClick={changeTheme}>L/D</button>
                </div>

                <button onClick={changeExpanded} className='w-20 px-6'>
                    <img src="hamburger.png" alt="Expand navbar icon" className='w-[40px] h-[40px] ' />
                </button>

            </div>

            {/* Desktop nav */}
            <ul className={` hidden md:flex flex-col md:flex-row w-full md:w-auto md:gap-6 text-center`}>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/">Filip Urzoń</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/projects">Projects</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/skills">Skills</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/contact">Contact</Link></li>
            </ul>

            {/* Mobile nav */}

            <ul className={` flex flex-col md:hidden w-full text-center`}>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/">Filip Urzoń</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/projects">Projects</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/skills">Skills</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/contact">Contact</Link></li>

            </ul>

        </nav >
    )
}