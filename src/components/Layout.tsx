import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"

import BackgroundAnimation from './BackgroundAnimation'
import Navbar from './Navbar'

export default function Layout(props: any) {
    const [counter, setCounter] = useState(0)
    function up() {
        setCounter(counter + 1)
    }


    // useEffect(() => {
    //     // localStorage.setItem("theme", "light")
    //     const selectedTheme = localStorage.getItem('theme')
    //     if (selectedTheme) {
    //         document.body.classList.add("theme", selectedTheme)
    //     } else if (window.matchMedia("prefers-color-scheme:dark").matches) {
    //         document.body.classList.add("dark")
    //     } else {
    //         document.body.classList.add("light")
    //     }

    //     console.log("test")
    // })

    return (
        <>
            <div className="flex flex-col items-center md:min-h-[100vh] bg-background">
                <div className="flex flex-col items-center w-full md:max-w-[500px] h-full text-primary ">
                    <Navbar />
                    <BackgroundAnimation />
                    <Outlet />
                    <p>{counter}</p>
                    <button onClick={up}>Counter</button>
                </div>
            </div>
        </>
    )
}