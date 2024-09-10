import { memo } from "react"
import { generateUUID } from "three/src/math/MathUtils.js"
import { AnimatePresence, motion } from "framer-motion"



const HamburgerButton = memo(function HamburgerButton({ isExpanded, setIsExpanded }: { isExpanded: boolean, setIsExpanded: Function }) {

    function changeExpanded() {
        if (isExpanded) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }
    }

    return (
        <button onClick={changeExpanded} className="w-14 h-14 mr-2 bg-background hover:bg-fill rounded-lg md:hidden border-2 border-hamburgerBorder "
            aria-label="Open/Close hamburger">
            <AnimatePresence mode="wait">
                {isExpanded ?
                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 22"
                        className="m-auto " key={generateUUID()}
                        initial={{ rotate: "0deg", scale: 0 }}
                        animate={{ rotate: "180deg", scale: 1, transition: { duration: 0.3 } }}
                        exit={{ rotate: "0deg", scale: 0, transition: { duration: 0.3 } }}>
                        <motion.rect width="24" height="2" x="2.808" y="19" fill="#000" rx="1" transform="rotate(-45 2.808 19)" />
                        <motion.rect width="24" height="2" x="4.222" y="2" fill="#000" rx="1" transform="rotate(45 4.222 2)" />
                    </motion.svg>
                    :
                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 22"
                        className="m-auto" key={generateUUID()}
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
    )
})

export default HamburgerButton