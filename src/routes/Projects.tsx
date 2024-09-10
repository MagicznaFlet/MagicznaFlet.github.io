import { motion } from 'framer-motion'
import { Title, Meta } from 'react-head'

export default function Projects() {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: -50, opacity: 1 }}
        >
            <Title>Projects - Filip Urzoń</Title>
            <Meta name="description" content="Projects" />
            <Meta name='keywords' content="Filip Urzoń, projects " />

            <h1 className="inline font-mono text-3xl font-bold border-b-4 border-borderBottom ">Projects</h1>

            <div className="w-full mt-5 flex flex-col md:flex-row  flex-wrap items-center md:justify-center gap-y-8 md:gap-8">
                <div className="text-center mt-5 w-full md:max-w-[220px] md:h-[200px] ">
                    <a href="https://github.com/MagicznaFlet/YelpCamp" target="_blank">
                        <img src="yelpcamp.png" alt="Yelpcamp" title="Yelpcamp" className="w-full h-auto md:h-[120px] rounded-xl hover:opacity-50 object-cover" />
                    </a>
                    <h2 className="bg-background font-bold text-lg mt-2">YelpCamp</h2>
                    <p className="w-full">Project finishing Colt Steele
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" className="text-link"> Bootcamp</a>
                    </p>
                </div>

                <div className="text-center mt-5 w-full md:max-w-[220px] md:h-[200px]">
                    <img src="desktopprojecter.jpg" alt="Desktop Projecter" title="Desktop Projecter"
                        className="w-full h-auto md:h-[120px] md:max-h-[150px] rounded-xl hover:opacity-50 object-cover" />
                    <h2 className="bg-background font-bold text-lg mt-2">Desktop Projecter</h2>
                    <p>Desktop app displaying wallpapers supporting gif,avi formats (in progress)</p>
                </div>

                <div className="text-center mt-5 w-full md:max-w-[220px] md:h-[200px]">
                    <img src="algonest.png" alt="AlgoNest" title="AlgoNest"
                        className="w-full h-auto md:h-[120px] rounded-xl hover:opacity-50 object-cover" />
                    <h2 className="bg-background font-bold text-lg mt-2">AlgoNest.io</h2>
                    <p>Algorithmic/Code learning app (in progress)</p>
                </div>

            </div>

        </motion.div>
    )
}