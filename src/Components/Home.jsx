import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1 style={{color: "red"}}>Home Component</h1>
            <a href="/about">Go to About </a>
            <br/>
            <Link to={"/about"}>Go to About with <code>Link</code> </Link>
        </>
    )
}