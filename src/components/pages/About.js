import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from '../Layouts/Header'
import '../../assets/styles/About.scss'

const About = () => {
  return (
    <>
      <Header />
      <section className="container-about">
        <h2 className="about-title">Aquí un poco sobre mi</h2>
        <div className="container-image-link">
          <div className="about-content about-content-first">
            <figure className="about-image">
              <img
                src="https://i.postimg.cc/QNKSscg6/perfildat.jpg"
                alt="imagen"
              />
              <p>Daniel Quispe</p>
              <ul className="links-user">
                <li>
                  <a href="https://github.com/danielfelipeq">
                    <FaGithub /> danielfelipeq
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/daniel-felipe-quispe/">
                    <FaLinkedin /> Daniel Quispe
                  </a>
                </li>
              </ul>
            </figure>
          </div>
          <div className="about-content about-content-second">
            <p className="about-me">
              Veo que entraste a mi espacio, donde conoceras un poco de mi,
              desde pequeño me gusto mucho las tecnologias, por ello decidí
              estudiar Ingeniería de Sistemas, siempre estoy atento a aprender
              de los demás. Me encanta trabajar en equipo y en mi tiempo libre
              me gusta escuchar música, ver películas y series, y jugar algún
              videojuego.
            </p>
          </div>
        </div>
        <div className="about-content about-content-third">
          <h2>¿3 cosas que hayas aprendido en el bootcamp de MakeItReal?</h2>
          <p>
            Siento que son muchas cosas que aprendí junto a mis compañeros, muy
            feliz de estar en este Bootcamp, pero aqui van las 3 cosas:
          </p>
          <ul>
            <li>
              <p>
                Durante el tiempo que estoy en el bootcamp MakeItReal aprendí
                React(FrontEnd) por parte de nuestro coach Sergio.
              </p>
            </li>
            <li>
              <p>
                Aprendí a trabajar colaborativamente con la metodologia ágil
                Scrum.
              </p>
            </li>
            <li>
              <p>
                Aprendí sobre las habilidades blandas y las experiencias muy
                buenas contadas por parte de nuestra coach Pia.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
export default About
