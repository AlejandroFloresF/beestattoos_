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
            {productList.map((product) => (
                <div>{product.name}</div>
            ))}
            <Footer/>
        </div>
    )
    
}


export default HomePage

