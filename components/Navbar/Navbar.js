import React from "react";
import Link from "next/Link";



const Navbar = () => {
    return (
        <nav>
            <ul>
            <Link href="/">
                    <p>Home</p>
            </Link>
            <Link href="/">
                    <p>Gallery</p>
            </Link>
            <Link href="/">
                    <p>Login</p>
            </Link>
            </ul>
        </nav>
    )
}


export default Navbar