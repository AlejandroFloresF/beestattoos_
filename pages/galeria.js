import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../Footer/Footer.module.css';



const Galeria = () => {
    return (
        <div>
            <Navbar/>
            <section>
                <h1>Beestattoos_ Galeria</h1>
                </section>
                <div class="gallery">
                <div class="col">
                    <div class="image">
                    <img src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                    <div class="image">
                    <img src="https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                    <div class="image">
                    <img src="https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                </div>
                <div class="col">
                    <div class="image">
                    <img src="https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                    <div class="image">
                    <img src="https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                    <div class="image">
                    <img src="https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?cs=srgb&dl=pexels-lada-rezantseva-9699293.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                </div>
                <div class="col">
                    <div class="image">
                    <img src="https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                    <div class="image">
                    <img src="https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                    <div class="image">
                    <img src="https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""></img>
                    </div>
                </div>
                </div>
            <Footer/>
        </div>
    )
}


export default Galeria