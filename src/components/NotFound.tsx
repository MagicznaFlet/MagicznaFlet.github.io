import { Title, Meta } from 'react-head'
import Navbar from './Navbar'


export default function NotFound() {
    return (<>
        <Title>NotFound - Filip Urzoń</Title>
        <Meta name="description" content="404 Error" />
        <Meta name="keywords" content="404, not found" />

        <div className="flex flex-col items-center min-h-[100vh] bg-background">
            <Navbar />
            <div className="flex flex-col w-full mt-20 max-w-[500px] text-primary">
                <div className="w-auto my-3 pb-8 ml-4 mr-4 flex flex-col items-center bg-fill rounded-lg">
                    <p className="text-[50px] md:text-[200px] text-link my-6">404</p>
                    <a href="/" >
                        <div className='bg-link text-primary w-auto md:w-[200px] text-center rounded-lg p-6 hover:opacity-80'>Back to main page</div>
                    </a>
                </div>
            </div>
        </div>



    </>
    )
}

