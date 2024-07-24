import { Helmet } from 'react-helmet'


export default function About() {
    return (
        <>
            <Helmet>
                <title>Homepage - Filip Urzoń</title>
                <meta name="description" content="Filip Urzoń personal website, passionate about technology." />
                <meta name='keywords' content="Filip Urzoń , personal website, programming" />
            </Helmet>

            <div className=" w-full my-3 py-2 text-center text-special bg-gray-500 rounded-lg ">
                <p>Hi im Filip, web developer from Poland</p>
            </div>
            <div className="">
                <h1 className="text-3xl ">About me</h1>
                <p>Passionate about web development, programming and databases. Currenly tinkering with React, Express and ASM_86.
                    Ocasionally doing blender. I like fantasy books (especially Dark Tower and Dune series)
                    and drinking unhealthy amounts of coffee. Owner of 4 ducks.
                </p>
            </div>
        </>
    )
}