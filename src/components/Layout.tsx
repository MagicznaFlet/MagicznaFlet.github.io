import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"

import BackgroundAnimation from './BackgroundAnimation'
import Navbar from './Navbar'

export default function Layout(props: any) {

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
                <Navbar />
                <div className="flex flex-col w-full md:max-w-[500px] text-primary">
                    <BackgroundAnimation />
                    <main className="px-4 md:px-0">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}