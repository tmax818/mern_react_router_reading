import {Link} from "react-router-dom";

export const About = () => {
    return (
        <>
            <h1 style={{color: "blue"}}>About Component</h1>
            <a href="/">Go Home </a>
            <br/>
            <Link to={"/"}>Go Home with <code>Link</code> </Link>
        </>
    )
}