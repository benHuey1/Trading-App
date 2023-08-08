import { useState } from "react";

export default function Error404() {
    return (
        <>
            <div>
                <h2>ERROR 404</h2>
                <p>The page you're searching for doesn't exist !</p>
                <a href={"/"}>-- Come back Home --</a>
            </div> 
        </>
    )
}