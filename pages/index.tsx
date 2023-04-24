import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



const HomePage = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        window
            .fetch("/api/avo")
            .then((response) => response.json())
            .then(({data,length}) => {
                setProductList(data)
            })
    }, [])

    return (
        <div>
            <Navbar/>
            <section className="main-index-container">
                <div className="main-index-logo"></div>
                <ul className="main-index-slider--container">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <Footer/>
        </div>
    )
    
}


export default HomePage

