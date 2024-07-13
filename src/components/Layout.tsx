import { useState } from "react"
import { Outlet } from "react-router-dom"

import BackgroundAnimation from './BackgroundAnimation'
import Navbar from './Navbar'

export default function Layout(props: any) {
    const [counter, setCounter] = useState(0)
    function up() {
        setCounter(counter + 1)
    }
    return (
        <>
            <div className="flex flex-col items-center h-full bg-[#202020]">
                <Navbar />
                <div className="flex flex-col items-center w-[40%] h-full text-white ">
                    <BackgroundAnimation />
                    <Outlet />
                    <p>{counter}</p>
                    <button onClick={up}>Counter</button>
                </div>
            </div>
        </>
    )
}