import {  Link } from "react-router-dom";

export default function ErrorPage(){
    return(
        <div>
            <h1>Error! The page you are looing for doe not exist!</h1>
            <Link to="/">Back</Link>
        </div>
    )
}