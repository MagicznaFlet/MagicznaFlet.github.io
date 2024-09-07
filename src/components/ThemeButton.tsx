import { memo } from "react"
import { generateUUID } from "three/src/math/MathUtils.js"
import { AnimatePresence, motion } from "framer-motion"



const ThemeButton = memo(function ThemeButton({ currentTheme, setCurrentTheme }: { currentTheme: string, setCurrentTheme: Function }) {


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
        <button className="w-14 h-14 mr-2 md:mr-20 " onClick={changeTheme}>
            <AnimatePresence mode="wait">
                {currentTheme == 'dark' ?
                    <motion.div className="w-full h-full p-3 bg-link rounded-lg"
                        initial={{ y: 20, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ y: 20, opacity: 0 }}
                        key={generateUUID()} >
                        <div className="bg-[url('/night.png')] w-full h-full bg-cover"></div>
                    </motion.div>
                    :
                    <motion.div className="w-full h-full p-3 border-2 border-grey-200 bg-background hover:bg-fill rounded-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ y: 20, opacity: 0 }}
                        key={generateUUID()} >
                        <div className="bg-[url('/light.png')] w-full h-full bg-cover"></div>
                    </motion.div>
                }
            </AnimatePresence>
        </button>
    )
})

export default ThemeButton