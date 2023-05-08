import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Nosotros = () => {
    return (
        <div>
            <Navbar/>
            <section className="nosotros-main-container">
                <h1>Nosotros</h1>
                <img></img>
                <article>
                    <h1>
                    se crea a partir de una idea que surge en una conversación entre amigos, uno de ellos teniendo un conocimiento
                    previo sobre el arte del dibujo, tanto práctico como teórico, en enero del 2022 decide iniciar comprando un 
                    pequeño kit para tatuar muy limitado con el cual tomaría cariño por esa nueva práctica, mirando un par de 
                    tutoriales al inicio aprendió las bases, después los tutoriales se convirtieron en cursos completos, terminando 
                    así de aprender y actualizar poco a poco el material de trabajo además de la forma de trabajar, a día de hoy 
                    cuneta con una página en Instagram con cerca de 200 seguidores y un aproximado de más de 1200 clientes, de 
                    momento el estudio es remoto con una fecha estimada "mayo 30" para establecer un estudio propio.
                    </h1>
                </article>
            </section>
            <Footer/>
        </div>
    )
}


export default Nosotros







//hackthegames
//h 1
//a 


let string = "hackthegames"
const ejemplo = string.split("");

for(i = 0; i < ejemplo.length; i++ ) {
    var elemento = [ejemplo[i] , i];
    console.log("hola soy i y estoy en "+ elemento[0])
    for(j = 0; j < ejemplo.length; j++ ) {
        if(elemento[1] != j){
            console.log("hola soy j " + ejemplo[j])
            if(elemento[0] == ejemplo[j]) {
                
            }
        }
    }
    

}
console.log(ejemplo)






  
  