import react from "react";
import { useRouter } from "next/router";


const ProductItem = () => {
    const {
        query: { id }, 
    } = useRouter()

    return (
        <div>
            <h1>tatuaje de {id}</h1>
        </div>
    )
}


export default ProductItem