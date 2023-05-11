import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    }
  }, [user, loading])

  return (
    <div className="main-container-sign_in">
      <section className="section-container">
          <ul className="container-iner"> 
              <li className="iner-singin"><p>Iniciar Sesion</p></li>
              <li className="iner-email">
                  <div className="container-iner" >
                      <span className="invalid" id="correo-comprobacion"></span>
                      <input autoComplete="username" className="logininput" placeholder="correo@ejemplo.com" type="text" name="username" id="username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="La direccion de correo electronica no es valida" required></input>
                      <span className="password-icon"></span>
                      <input autoComplete="current-password" className="logininput" placeholder="contraseña" type="password" name="password" id="password" pattern=".{5,}" title="La contraseña tiene que contener al menos 5 caracteres" required></input>
                      <li className="iner-botons">
                          <a className="recordar" href="">Recordar contraseña</a><a className="" href="">Terminos y Condiciones</a>
                      </li>
                      <input className="iner-sign-button" type="submit" value="Vamos!"></input>
                  </div>
              </li>
              <li className="iner-lineal"><p>Otras</p></li>
              <li className="iner-icons">
                  <img className="face-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt=""></img>
                  <img className="goog-icon" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt=""></img>
                  <img className="twit-icon" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png" alt=""></img>
              </li>
              <li className="iner-create-acount">
                  <span>No tienes cuenta?</span>
                  <a href="./sign_up.html"> Crea una nueva!</a>
              </li>
          </ul>
      </section>
    </div>
  )
}