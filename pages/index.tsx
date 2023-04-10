import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar/Navbar"


const HomePage = () => {
    const [productList, setProductList] = useState<TProduct>([])

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
            <h1>Beestattoos_</h1>
            {productList.map((product) => (
                <div>{product.name}</div>
            ))}
        </div>
    )
}


export default HomePage