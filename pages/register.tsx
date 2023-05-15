import React from "react";



const Register = () => {
    return (
        <main className="main-container-sign_in">
        <section className="section-container">
            <ul className="container-iner">
                <li className="iner-singin"><p>Crear Cuenta</p></li>
                <div className="slidery">
                    <div className="container-slidery">
                        <li className="iner-email">
                            <form action="" className="">
                                <span className="email-icon"></span>
                                <input autoComplete="username" className="email-input" placeholder="Apellido (S)" type="text"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Nombre (S)" type="text"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Correo" type="email"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="contraseña" type="password"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Numero Telefonico" type="number"></input>
                            </form>
                        </li>
                        <li className="iner-lineal"><p>Direccion</p></li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Calle" type="number"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Colonia" type="number"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Numero interior y exterior" type="number"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Municipio" type="number"></input>
                            </form>
                        </li>
                        <li className="iner-password">
                            <form action="">
                                <span className="password-icon"></span>
                                <input autoComplete="current-password" className="password-input" placeholder="Codigo Postal" type="number"></input>
                            </form>
                        </li>
                    </div>
                </div>
                <li className="iner-botons">
                </li>
                <li className="iner-sign-button"><button>Vamos!</button></li>
                <li className="iner-create-acount"><span>Ya tienes cuenta? </span> <a href="./sign_in.html"> Inicia Sesion</a></li>
            </ul>
        </section>
    </main>
    )
}


export default Register