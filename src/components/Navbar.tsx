import { useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)
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
        <nav className="fixed top-0 z-10 flex flex-col md:flex-row w-full justify-center items-center md:h-14 md:h-20  
        bg-background/80 backdrop-blur-lg text-primary">
            <div className="w-full md:w-auto flex justify-end md:justify-around">

                <button className="w-14 h-14 mr-1 " onClick={changeTheme}>
                    <AnimatePresence mode="wait">
                        {currentTheme == 'dark' ?
                            <motion.div className="w-full h-full p-3 bg-lime-200 rounded-lg border-2 border-black"
                                initial={{ y: 20, opacity: 1 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ y: 20, opacity: 0 }}
                                key={'dark'} >
                                <div className="bg-[url('/night.png')] w-full h-full bg-cover"></div>
                            </motion.div>
                            :
                            <motion.div className="w-full h-full p-3 bg-white-500 rounded-lg border-2 "
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ y: 20, opacity: 0 }}
                                key={'light'} >
                                <div className="bg-[url('/light.png')] w-full h-full bg-cover"></div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </button>
                <button onClick={changeExpanded} className="w-20 px-6 md:hidden">
                    <AnimatePresence mode="wait">
                        {isExpanded ?
                            <motion.svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 22" key={3}
                                initial={{ rotate: "0deg", scale: 0 }}
                                animate={{ rotate: "180deg", scale: 1, transition: { duration: 0.3 } }}
                                exit={{ rotate: "0deg", scale: 0, transition: { duration: 0.3 } }}>
                                <motion.rect width="24" height="2" x="2.808" y="19" fill="#000" rx="1" transform="rotate(-45 2.808 19)" />
                                <motion.rect width="24" height="2" x="4.222" y="2" fill="#000" rx="1" transform="rotate(45 4.222 2)" />
                            </motion.svg>
                            :
                            <motion.svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 22" key={4}
                                initial={{ rotate: "0deg", scale: 0 }}
                                animate={{ rotate: "180deg", scale: 1, transition: { duration: 0.3 } }}
                                exit={{ rotate: "0deg", scale: 0, transition: { duration: 0.3 } }}>
                                <rect width="24" height="2" fill="#000" rx="1" />
                                <rect width="24" height="2" y="10" fill="#000" rx="1" />
                                <rect width="24" height="2" y="20" fill="#000" rx="1" />
                            </motion.svg>
                        }
                    </AnimatePresence>

                </button>

            </div>

            {/* Desktop nav */}
            <ul className="hidden md:flex flex-col md:flex-row w-full md:w-auto md:gap-6 text-center">
                <li className="py-20 border md:border-none md:px-0 "><Link to="/">Filip Urzoń</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/projects">Projects</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/skills">Skills</Link></li>
                <li className="py-20 border md:border-none md:px-0 "><Link to="/contact">Contact</Link></li>
            </ul>

            {/* Mobile nav */}

            <ul className={isExpanded ? "flex flex-col md:hidden w-full text-center" : "hidden"}>
                <Link to="/" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Filip Urzoń</li></Link>
                <Link to="/projects" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Projects</li></Link>
                <Link to="/skills" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Skills</li></Link>
                <Link to="/contact" onClick={changeExpanded}><li className="py-20 border md:border-none md:px-0 ">Contact</li></Link>
            </ul>

        </nav >
    )
}