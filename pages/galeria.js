import React from "react";
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



const Galeria = () => {

    const Focus = ()=> {
        var picture = getElementbyid
    }

    return (
        <div className="main-galery-container">
            <Navbar/>
                <section className="main-galery-container--slider">
                    <ul className="photos-container--slider">
                        <li onClick={Focus} id="photos-container--card" className="photos-container--card">
                            
                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                        <li id="photos-container--card" className="photos-container--card">

                        </li>
                    </ul>
                </section>
            <Footer/>
        </div>
    )
}


export default Galeria