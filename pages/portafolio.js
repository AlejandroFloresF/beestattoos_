import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Portafolio = () => {
    return (
        <div className="main-portafolio-container">
            <Navbar/>
                <section className="main-portafolio-container--slider">
                    <ul className="portafolio-container--slider">
                        <li className="portafolio-container--card">
                            
                        </li>
                        <li className="portafolio-container--card">

                        </li>
                        <li className="portafolio-container--card">

                        </li>
                        <li className="portafolio-container--card">

                        </li>
                        <li className="portafolio-container--card">

                        </li>
                        <li className="portafolio-container--card">

                        </li>
                        <li className="portafolio-container--card">

                        </li>
                        <li className="portafolio-container--card">

                        </li>
                        <li className="portafolio-container--card">

                        </li>
                    </ul>
                </section>
            <Footer/>
        </div>
    )
}


export default Portafolio