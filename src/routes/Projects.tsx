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

            <h1 className="w-full font-mono text-3xl font-bold">Projects</h1>
            <hr className="border-horizontalRule mt-1 mb-4" />

            <h2>
                Stuff i've been doing
            </h2>
            <div className="w-full flex flex-col md:flex-row  flex-wrap items-center md:justify-center md:gap-5">
                <div className="text-center mt-5 w-full md:max-w-[220px]">
                    <img src="catimg.png" alt="Yelpcamp image" className="w-full md:max-h-[175px] h-auto rounded-xl hover:opacity-50" />
                    <p className="bg-background">YelpCamp</p>
                </div>
                <div className="text-center mt-5 w-full md:max-w-[220px]">
                    <img src="catimg.png" alt="Algera image" className="w-full md:max-h-[175px] h-auto rounded-xl" />
                    <p className="bg-background">Algera</p>
                </div>
                <div className="text-center mt-5 w-full md:max-w-[220px]">
                    <img src="catimg.png" alt="Yelpcamp" className="w-full md:max-h-[175px] h-auto rounded-xl" />
                    <p className="bg-background">YelpCamp</p>
                </div>
                <div className="text-center mt-5 w-full md:max-w-[220px]">
                    <img src="catimg.png" alt="Algera image" className="w-full md:max-h-[175px] h-auto rounded-xl" />
                    <p className="bg-background">Algera</p>
                </div>
                <div className="text-center mt-5 w-full md:max-w-[220px]">
                    <img src="catimg.png" alt="Yelpcamp" className="w-full md:max-h-[175px] h-auto rounded-xl" />
                    <p className="bg-background">YelpCamp</p>
                </div>

            </div>

        </motion.div>
    )
}