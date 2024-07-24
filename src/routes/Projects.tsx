import { Helmet } from "react-helmet"

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects - Filip Urzoń</title>
                <meta name="description" content="Projects"></meta>
                <meta name='keywords' content="Filip Urzoń, skills, " />
            </Helmet>
            <div className=" ">
                <h1 className="text-3xl ">Projects</h1>
                <p>Passionate about technology, programming and and databases. Ocasionally doing blender. I like books (especially Stephen's King and Dune series)
                    <p></p>
                </p>
                <div className="w-full flex flex-col md:flex-row  flex-wrap items-center md:justify-center w-full md:gap-10">
                    <div className="w-[80%] md:w-[220px] min-h-[175px] text-center">
                        <p className="bg-background">Text</p>
                        <img src="catimg.png" alt="" className="w-full h-[175px] rounded-xl" />
                    </div>
                    <div className="w-[80%] md:w-[220px] min-h-[175px] ">
                        <p className="bg-background">Text</p>
                        <img src="catimg.png" alt="" className="w-full h-[175px] rounded-xl" />
                    </div>
                    <div className="w-[80%] md:w-[220px] min-h-[175px] ">
                        <p className="bg-background">Text</p>
                        <img src="catimg.png" alt="" className="w-full h-[175px] rounded-xl" />
                    </div>
                    <div className="w-[80%] md:w-[220px] min-h-[175px]">
                        <p className="bg-background">Text</p>
                        <img src="catimg.png" alt="" className="w-full h-[175px] rounded-xl" />
                    </div>
                    <div className="w-[80%] md:w-[220px] min-h-[175px] ">
                        <p className="bg-background">Text</p>
                        <img src="catimg.png" alt="" className="w-full h-[175px] rounded-xl" />
                    </div>
                    <div className="w-[80%] md:w-[220px] min-h-[175px] ">
                        <p className="bg-background">Text</p>
                        <img src="catimg.png" alt="" className="w-full h-[175px] rounded-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}