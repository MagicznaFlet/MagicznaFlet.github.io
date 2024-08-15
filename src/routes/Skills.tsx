import { Helmet } from "react-helmet"
import { motion } from 'framer-motion'

export default function Skills() {
    return (
        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
        >
            <Helmet>
                <title>Skills - Filip Urzoń</title>
                <meta name="description" content="Skills" />
                <meta name='keywords' content="Filip Urzoń, skills" />
            </Helmet>
            <div className="w-full">
                <h1 className="font-mono text-3xl">Skills</h1>
                <p>Skilled with Cpp,JS,Rust</p>
            </div>
        </motion.div>
    )

}