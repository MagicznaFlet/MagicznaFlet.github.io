import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

export default function About() {



    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, transition: { duration: 0.5 } }}
        >
            <Helmet>
                <title>Homepage - Filip Urzoń</title>
                <meta name="description" content="Filip Urzoń personal website, passionate about technology." />
                <meta name='keywords' content="Filip Urzoń , personal website, programming" />
            </Helmet>


            <div className=" w-full my-3 py-2 text-center text-special bg-fill rounded-lg ">
                <p>Hi im Filip, web developer from Poland</p>
            </div>
            <div className="">
                <h1 className="inline font-mono text-3xl font-bold border-b-4 border-borderBottom">About me</h1>
                <p className='mt-5'>Twenty-one years old Vacational School Graduate majoring in Programming. Passionate about web development, programming and databases.
                    Currenly tinkering with React, Node.js and ASM_86.
                    Occasionally doing blender and pixelart. I like reading books (especially Dark Tower and Dune series)
                    and drinking unhealthy amounts of coffee. Owner of 4 ducks and cat. Currently looking for job as React/Node.js dev.
                </p>
            </div>
            <hr className="border-horizontalRule my-8" />
            <div className=''>
                <h2 className='w-full font-mono text-xl font-bold'>Contact</h2>

                <ul>
                    <li className='text-primary'>Tel: 885 724 414</li>
                    <li className='text-primary'>Email: filip.urzon2003@gmail.com</li>
                </ul>
            </div>
            <hr className="border-horizontalRule my-8" />
            <div className=''>
                <h2 className='w-full font-mono text-xl font-bold'>Web</h2>
                <ul>
                    <li className='text-link'><a href="https://www.linkedin.com/in/filip-urzo%C5%84/" target='_blank'>LinkedIn</a></li>
                    <li className='text-link'><a href="https://github.com/MagicznaFlet" target='_blank'>Github</a></li>
                    <li className='text-link'><a href="https://roadmap.sh/u/filipurzon" target='_blank'>Roadmap.sh</a></li>
                </ul>
            </div>

        </motion.div>
    )
}