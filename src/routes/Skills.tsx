import { motion } from 'framer-motion'
import { Title, Meta } from 'react-head'

import IconBox from "../components/IconBox"

export default function Skills() {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: -50, opacity: 1 }}
        >
            <Title>Skills - Filip Urzoń</Title>
            <Meta name="description" content="Skills" />
            <Meta name='keywords' content="Filip Urzoń, skills" />

            <div className="w-full ">
                <h1 className="inline font-mono text-3xl font-bold border-b-4 border-borderBottom">Skills</h1>



                <div className="mt-5">
                    <h2 className="w-full font-mono text-xl font-bold">Tech i currently use</h2>
                    <div className="flex flex-wrap mt-4 gap-4 ">
                        <IconBox src="icons/git_img.png" title="Git" alt="Git" link="https://git-scm.com/" />
                        <IconBox src="icons/vite_img.svg" title="Vite" alt="Vite" link="https://vite.com/" />
                        <IconBox src="icons/javascript_img.svg" title="Javascript" alt="Javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                        <IconBox src="icons/typescript_img.png" title="Typescript" alt="Typescript" link="https://www.typescriptlang.org/" />
                        <IconBox src="icons/nodejs_img.png" title="NodeJS" alt="NodeJS" link="https://nodejs.org/en" />
                        <IconBox src="icons/express_img.png" title="Express" alt="Express" link="https://expressjs.com/" object="fit" />
                        <IconBox src="icons/mongodb_img.png" title="MongoDB" alt="MongoDB" link="https://www.mongodb.com/" />
                        <IconBox src="icons/react_img.webp" title="React" alt="React" link="https://react.dev/" />
                        <IconBox src="icons/threejs_img.png" title="Threejs" alt="Threejs" link="https://threejs.org/" />
                        <IconBox src="icons/framer_motion_img.png" title="Framer Motion" alt="Framer Motion" link="https://www.framer.com/motion/" />
                        <IconBox src="icons/react_router_img.png" title="React Router" alt="React Router" link="https://react.dev/" />
                        <IconBox src="icons/tailwindcss_img.png" title="TailwindCSS" alt="TailwindCSS" link="https://tailwindcss.com/" />
                    </div>
                </div>

                <hr className="border-horizontalRule  my-8" />

                <h2 className="w-full font-mono text-xl font-bold">Things i tried before</h2>
                <div className="flex flex-wrap mt-4 mb-10 gap-4">
                    <IconBox src="icons/cpp_img.svg" title="Cpp" alt="Cpp" link="https://cplusplus.com/" />
                    <IconBox src="icons/python_img.svg" title="Python" alt="Python" link="https://www.python.org/" />
                    <IconBox src="icons/java_img.svg" title="Java" alt="Java" link="https://www.java.com/pl/" />
                    <IconBox src="icons/android_img.webp" title="Android" alt="Android" link="https://www.android.com/intl/pl_pl/" />
                    <IconBox src="icons/csharp_img.png" title="Csharp" alt="Csharp" link="https://learn.microsoft.com/en-us/dotnet/csharp/" />
                    <IconBox src="icons/django_img.svg" title="Django" alt="Django" link="https://www.djangoproject.com/" />
                    <IconBox src="icons/postgres_img.png" title="PostgreSQL" alt="PostgreSQL" link="https://www.postgresql.org/" />
                </div>

                <hr className="border-horizontalRule my-8" />

                <h2 className="mb-4 w-full font-mono text-xl font-bold">Courses im currenly pursuing</h2>
                <ul className="list-disc marker:text-special text-link" style={{ listStylePosition: "inside" }}>
                    <li className=" hover:underline" style={{ listStyleType: "square" }}>
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp 2024</a>
                    </li>
                    <li className="hover:underline" style={{ listStyleType: "square" }}>
                        <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank">React - The Complete Guide 2024 (incl. Next.js, Redux)</a>
                    </li>
                    <li className="hover:underline" style={{ listStyleType: "square" }}>
                        <a href="https://www.udemy.com/course/docker-kubernetes-the-practical-guide/" target="_blank">Docker & Kubernetes: The Practical Guide [2024 Edition]</a>
                    </li>
                </ul>


            </div>
        </motion.div >
    )

}