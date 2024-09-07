import { Helmet } from "react-helmet"

export default function NotFound() {
    return (<>
        <Helmet>
            <title>NotFound</title>
            <meta name="description" content="404 Error" />
            <meta name="keywords" content="404, not found" />
        </Helmet>
        <div className="w-full my-3 py-2 text-center bg-fill rounded-lg">
            <p className="text-[200px] text-link">404</p>
            <button className="bg-link text-primary rounded-lg p-2 mb-10 hover:opacity-80">Back to Home</button>
        </div>
    </>
    )
}

