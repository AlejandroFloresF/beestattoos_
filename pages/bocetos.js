import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Galeria = () => {
    return (
        <div className="main-galery-container">
            <Navbar/>
                <section className="main-galery-container--slider">
                    <ul className="photos-container--slider">
                        <li className="photos-container--card">
                            
                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                        <li className="photos-container--card">

                        </li>
                    </ul>
                </section>
            <Footer/>
        </div>
    )
}


export default Galeria