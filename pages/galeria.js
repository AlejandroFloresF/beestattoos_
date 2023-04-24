import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



const Galeria = () => {
    return (
        <div className="main-galery-container">
            <Navbar/>
                <section className="main-galery-container--slider">
                    <ul className="photos-container--slider">
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">
                            
                        </motion.li>
                        <motion.li 
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}} 
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                        <motion.li
                        whileTap={{ scale: 1.6, margin: "100px"}}
                        className="photos-container--card">

                        </motion.li>
                    </ul>
                </section>
            <Footer/>
        </div>
    )
}


export default Galeria