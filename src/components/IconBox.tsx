import { motion } from 'framer-motion'

export default function IconBox(
    { src, title, alt, link = "#", object = "cover" }
        :
        { src: string, title: string, alt: string, link: string, object?: string }) {
    return (
        <motion.div
            className='w-12 h-12'
            whileHover={{ scale: 1.4 }}>
            <a href={link} target='_blank'>
                <img src={src} title={title} alt={alt} className={`object-${object} w-12 h-12`} />
            </a>
        </motion.div>
    )
}