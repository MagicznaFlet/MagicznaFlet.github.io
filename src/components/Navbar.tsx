import {useState} from 'react'

export default function Navbar(props:any){
    const isExpanded = useState(false)
    return (
        <nav className="flex flex-col md:flex-row w-full justify-around items-center md:h-20 w-full bg-amber-100 
        dark:bg-black dark:text-white">
            <div className="flex md:flex-row">
                <div className="bg-blue-700 md:w-20 md:h-20">
                    <img src="catimg.png" alt="Logo image" className="md:w-full md:h-full" />
                </div>
                <div className="bg-red-700 w-20 h-20">
                    
                </div>
            </div>
            <ul className="flex flex-col md:flex-row w-full md:w-auto md:gap-3 text-black-500">
                <li className="md:px-4 md:rounded-full dark:hover:bg-white dark:hover:text-black"><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact me</a></li>
            </ul>
        </nav>
    )
}