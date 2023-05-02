import React, { useState } from 'react';
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Picture from "../components/Picture"

const Galeria = () => {
    return (
        <div className="main-galery-container">
            <Navbar/>
                <section className="main-galery-container--slider">
                    <ul className="photos-container--slider">
                        <Picture/>
                        <Picture/>
                        <Picture/>
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
};

export default Galeria;
























