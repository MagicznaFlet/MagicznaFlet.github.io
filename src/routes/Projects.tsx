import { Helmet } from "react-helmet"
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <Helmet>
                <title>Projects - Filip Urzoń</title>
                <meta name="description" content="Projects" />
                <meta name='keywords' content="Filip Urzoń, projects " />
            </Helmet>

            <h1 className="text-3xl ">Projects</h1>
            <h2>
                Stuff that i make
            </h2>
            <div className="w-full flex flex-col md:flex-row  flex-wrap items-center md:justify-center md:gap-10">
                <div className="text-center mt-5 mb-5 w-full md:max-w-[220px]">
                    <div className="w-full md:w-[220px] md:max-h-[175px] h-auto">
                        <img src="catimg.png" alt="Yelpcamp" className="w-full h-auto object-cover rounded-xl" />
                    </div>
                    <p className="bg-background">YelpCamp</p>
                </div>
                <div className="text-center mt-5 mb-5 w-full md:max-w-[220px]">
                    <div className="w-full md:w-[220px] md:max-h-[175px] h-auto">
                        <img src="catimg.png" alt="Yelpcamp" className="w-full h-auto object-cover rounded-xl" />
                    </div>
                    <p className="bg-background">YelpCamp</p>
                </div>
                <div className="text-center mt-5 mb-5 w-full md:max-w-[220px]">
                    <div className="w-full md:w-[220px] md:max-h-[175px] h-auto">
                        <img src="catimg.png" alt="Yelpcamp" className="w-full h-auto object-cover rounded-xl" />
                    </div>
                    <p className="bg-background">YelpCamp</p>
                </div>

            </div>

        </motion.div>
    )
}