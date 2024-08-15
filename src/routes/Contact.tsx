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
            <div className="w-full">
                <p>885724414</p>
            </div>
        </motion.div>
    )
}