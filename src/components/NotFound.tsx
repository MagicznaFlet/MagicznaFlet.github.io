import { Helmet } from "react-helmet"

export default function NotFound() {
    return (<>
        <Helmet>
            <title>NotFound</title>
            <meta name="description" content="404 Error" />
            <meta name="keywords" content="404, not found" />
        </Helmet>
        <p>404 - Page Not Found</p>

    </>
    )
}

