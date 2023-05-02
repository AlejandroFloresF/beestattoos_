import React from "react";
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Picture from "../components/Picture"



const Portafolio = () => {
    return (
        <div className="main-portafolio-container">
            <Navbar/>
                <section className="main-portafolio-container--slider">
                    <ul className="portafolio-container--slider">
                        <Picture/>
                        <Picture/>
                        <Picture/>
                        <Picture/>
                        <Picture/>
                        <Picture/>
                        <Picture/>
                        <Picture/>
                        <Picture/>
                    </ul>
                </section>
            <Footer/>
        </div>
    )
}


export default Portafolio