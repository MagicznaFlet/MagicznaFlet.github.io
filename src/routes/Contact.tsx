import { Helmet } from "react-helmet"
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}

        >
            <Helmet>
                <title>Contact - Filip Urzoń</title>
                <meta name="description" content="Contact" />
                <meta name='keywords' content="Filip Urzoń, skills, " />
            </Helmet>
            <div className="w-full font-mono text-3xl font-bold">
                <p>Contact</p>
                <hr className="border-horizontalRule mt-1 mb-4" />
            </div>
        </motion.div>
    )
}