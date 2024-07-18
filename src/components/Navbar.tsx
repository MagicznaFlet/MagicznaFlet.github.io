import { useState } from 'react'
import { Link } from 'react-router-dom'

function changeTheme() {
    window.localStorage.theme = 'light'
}

export default function Navbar(props: any) {
    const isExpanded = useState(false)
    const initialTheme = document.body.classList
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

    return (
        <nav className="absolute md:sticky md:top-0  flex flex-col md:flex-row w-full justify-around items-center md:h-20  
        bg-background text-primary ">
            <div className="flex md:flex-row">
                <div className="bg-blue-700 md:w-20 md:h-20">
                    <img src="catimg.png" alt="Logo image" className="md:w-full md:h-full" />
                </div>
                <div className="bg-red-700 w-20 h-20 text-center">
                    <button onClick={changeTheme}>L/D</button>
                </div>
            </div>
            <ul className="flex flex-col md:flex-row w-full md:w-auto md:gap-3 text-black-500">
                <li className=" md:hover:bg-primary md:hover:text-background md:rounded-full"><Link to="/">Filip Urzoń</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}