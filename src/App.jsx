import "./App.css";
import me from "./assets/main.png";
import computer from "./assets/hero-devices 1.svg";
import bs from "./assets/bs.svg";
import css from "./assets/css.svg";
import figma from "./assets/figma.svg";
import greenboy from "./assets/greenboy.svg";
import html from "./assets/html.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import sass from "./assets/sass.svg";
import vite from "./assets/vite.svg";
import vsc from "./assets/vsc.svg";
import git from "./assets/git.svg";
import desc1 from "./assets/desc1.jpg";
import share from "./assets/share.svg";
import github from "./assets/github.svg";
import robot from "./assets/robot.gif";
import portfolio from "./assets/portfolio.png";
import alien from "./assets/alien.gif";
import mano from "./assets/mano.png";
import circle from "./assets/circle.svg";
import working from "./assets/working.png";
import movies from "./assets/movies.png";
import movies2 from "./assets/movies2.png";
import nintendo from "./assets/nintendo.png";
import nintendo2 from "./assets/nintendo2.png";
import aimtrainer from "./assets/aimtrainer.png";
import calculadora from "./assets/calculadora.png";
import weatherio from "./assets/weatherio.png";
import portfolio2 from "./assets/portfolio2.png";
import portfolio3 from "./assets/portfolio3.png";
function App() {
  const gh = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="tabler-icon tabler-icon-brand-github"
    >
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
    </svg>
  );
  const share = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="tabler-icon tabler-icon-external-link"
    >
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
      <path d="M11 13l9 -9"></path>
      <path d="M15 4h5v5"></path>
    </svg>
  );

  console.log(window.innerWidth);
  return (
    <>
      <div className="hero__container">
        <nav>
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre mi</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contactame</a>
            </li>
          </ul>
        </nav>
        <main id="home">
          <div className="me__info">
            <h1>Marco Agudo</h1>
            <h2>
              Desarrollador <span style={{ color: "#70ac64" }}>Front end.</span>
            </h2>
          </div>
          <div className="img__container">
            <img src={me} alt="photo of me" className="me__img" />
          </div>
        </main>
      </div>
      <section id="about" className="section1">
        <article className="article1">
          <div className="desc__img">
            <img className="dimg" src={desc1} alt="" />
            <img id="circle" src={circle} alt="" />
            <img id="working" src={working} alt="" />
          </div>
          <div className="desc">
            <h3>Sobre mi</h3>
            <h1>¡Hola! Aqui Marco.</h1>
            <p>
              Soy un apasionado autodidacta del desarrollo web y amante de la
              tecnología y el gaming. Encuentro diversión en resolver problemas
              de código y crear soluciones innovadoras. Mi enfoque es aprender
              algo nuevo todos los días y aplicar ese conocimiento en mis
              proyectos.
            </p>
            <p>
              {" "}
              Algo que me encanta de la programación es la amplitud que esta
              posee, solo hace falta imaginar para crear.
            </p>
            <p>¡Estoy ansioso por abordar nuevos desafíos!</p>
          </div>
        </article>
        <article className="article2">
          <h1>Tecnologias que utilizo</h1>
          <hr />
          <div className="grid__container">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={sass} alt="" />
            <img src={bs} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={vite} alt="" />
            <img src={git} alt="" />
            {/* <img src={figma} className="figma" alt="" />
            <img src={vsc} alt="" /> */}
          </div>
        </article>
      </section>
      <section id="projects" className="section2">
        <article className="projects">
          <h3>Proyectos</h3>
          <div className="projects__subtitle">
            <h2>Cada proyecto es una pieza única de desarrollo</h2>
            <img src={alien} alt="" />
          </div>
          <div className="project">
            <div className={innerWidth > 768 ? "img" : "img2"}>
              <img src={innerWidth > 768 ? portfolio2 : portfolio3} alt="" />
            </div>
            <div className="project__info">
              <h2>PORTAFOLIO #1</h2>
              <p>
              Mi portafolio busca brindar una mirada a una variedad de proyectos donde aplico mis habilidades en desarrollo para crear interfaces modernas y responsivas. Cada sitio demuestra mi enfoque en el diseño centrado en el usuario y la excelencia técnica.
              <br />
              Se encuentra desarrollado con HTML5, CSS3 y REACT.
              </p>
              <div className="project__info__buttons">
                <a href="https://github.com/marcoagudo21/PortfolioDef">
                  <span>Código</span> {gh}
                </a>
                <a href="#home">
                  <span>Ver </span>
                  {share}
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className={innerWidth > 768 ? "img" : "img2"}>
              <img src={innerWidth > 768 ? movies : movies2} alt="" />
            </div>
            <div className="project__info">
              <h2>MOVIESAPP</h2>
              <p>
                MoviesApp es una aplicación desarrollada utilizando HTML5, CSS3 y JS. <br /> Su finalidad es facilitar la búsqueda de películas y series. Proporciona información detallada sobre el elenco de cada título y ofrece acceso directo a los trailers, simplificando así la experiencia del usuario. Los datos recopilados provienen de la API:
              </p>
              <div className="project__info__buttons">
                <a href="https://github.com/marcoagudo21/MoviesApp" target="_blank">
                  <span>Código</span> {gh}
                </a>
                <a href="https://marcoagudo21.github.io/MoviesApp/" target="_blank">
                  <span>Ver </span>
                  {share}
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__info">
              <h2>ANIMAL CROSSING CLON</h2>
              <p>
                Animal Crossing Clon es un sitio web desarrollado utilizando HTML5, CSS3 y Bootstrap. Este sitio busca replicar la estructura y estetica de la pagina web oficial de Animal Crossing. Fue desarrollado con la unica finalidad de mejorar mis habilidades.
              </p>
              <div className="project__info__buttons">
                <a href="https://github.com/marcoagudo21/Bootstrap-Practice-Web-MRR" target="_blank">
                  <span>Código</span> {gh}
                </a>
                <a href="https://marcoagudo21.github.io/Bootstrap-Practice-Web-MRR/" target="_blank">
                  <span>Ver </span>
                  {share}
                </a>
              </div>
            </div>
            <div className={innerWidth > 768 ? "img" : "img2"}>
              <img src={innerWidth > 768 ? nintendo : nintendo2} alt="" />
            </div>
          </div>

          <div className="project">
            <div className="project__info">
              <h2>WEATHERIO</h2>
              <p>
              WeatherIo es un projecto desarrollada utilizando HTML5, CSS3, JS y REACT. Es una aplicacion esencial que ofrece datos climáticos precisos para la ciudad seleccionada por el usuario. Con su interfaz intuitiva, brinda pronósticos actualizados y ayuda a planificar actividades según las condiciones meteorológicas.
              </p>
              <div className="project__info__buttons">
                <a href="https://github.com/marcoagudo21/WeatherIo" target="_blank">
                  <span>Código</span> {gh}
                </a>
                <a href="https://glowing-donut-8f11f1.netlify.app/" target="_blank">
                  <span>Ver </span>
                  {share}
                </a>
              </div>
            </div>
            <div className="img2">
              <img src={weatherio} alt="" />
            </div>
          </div>
          <div className="project">
            <div className="img2">
              <img src={calculadora} alt="" />
            </div>
            <div className="project__info">
              <h2>CalculadoraJS</h2>
              <p>
                CalculadoraJS es un projecto desarrollado utilizando HTML5, CSS3 y JS. Este projecto fue realizado con la finalidad de practicar y mejorar mi logica de programación.
              </p>
              <div className="project__info__buttons">
                <a href="https://github.com/marcoagudo21/Calculadora-JS" target="_blank">
                  <span>Código</span> {gh}
                </a>
                <a href="https://marcoagudo21.github.io/Calculadora-JS/" target="_blank">
                  <span>Ver </span>
                  {share}
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__info">
              <h2>AIMTRAINER</h2>
              <p>
                AimTrainer es un projecto desarrollado utilizando HTML5, CSS3 y JS. Es un projecto didactico cuya finalidad busca unicamente mejorar mis habilidades con JS, consta de 3 dificultades y una interfaz sencilla.
              </p>
              <div className="project__info__buttons">
                <a href="https://github.com/marcoagudo21/aimTrainer-react3" target="_blank">
                  <span>Código</span> {gh}
                </a>
                <a href="https://prismatic-syrniki-3f4645.netlify.app/" target="_blank">
                  <span>Ver </span>
                  {share}
                </a>
              </div>
            </div>
            <div className="img2">
              <img src={aimtrainer} alt="" />
            </div>
          </div>
        </article>
      </section>
      <section id="contact" className="section3">
        <h3>Contáctame</h3>
        <div className="contact__container">
          <div className="contact__item">
            <a
              className="contact__item__icon"
              href="mailto:marcoagudo21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </a>
            <div className="contact__item__info">
              <h4>Mail</h4>{" "}
              <a
                href="mailto:marcoagudo21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                marcoagudo21@gmail.com
              </a>
            </div>
          </div>
          <div className="contact__item">
            <a
              className="contact__item__icon"
              href="https://www.linkedin.com/in/marco-agudo-487225287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-linkedin"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <div className="contact__item__info">
              <h4>LinkedIn</h4>{" "}
              <a
                href="https://www.linkedin.com/in/marco-agudo-487225287/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @MarcoAgudo
              </a>
            </div>
          </div>
          <div className="contact__item">
            <a
              className="contact__item__icon"
              href="https://wa.me/+541124539499"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="#000000"
                width="30"
                height="30"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="wsp"
                  d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"
                ></path>
              </svg>
            </a>
            <div className="contact__item__info">
              <h4>WhatsApp</h4>{" "}
              <a
                href="https://wa.me/+541124539499"
                target="_blank"
                rel="noopener noreferrer"
              >
                Text me!
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer__info">
          <h3>Copyright © 2023. All rights are reserved</h3>
        </div>
      </footer>
    </>
  );
}

export default App;
