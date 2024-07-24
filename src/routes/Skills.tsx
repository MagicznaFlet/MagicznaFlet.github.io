import { Helmet } from "react-helmet"

export default function Skills() {
    return (
        <>
            <Helmet>
                <title>Skills - Filip Urzoń</title>
                <meta name="description" content="Skills" />
                <meta name='keywords' content="Filip Urzoń, skills" />
            </Helmet>
            <div className="w-full">
                <h1 className="font-mono text-3xl">Skills</h1>
                <p>Skilled with Cpp,JS,Rust</p>
            </div>
        </>
    )

}