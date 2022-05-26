import logo_V from '/images/logo_ViteJS.png';
import logo_R from '/images/logo_ReactJS.png';
import logo_RR from '/images/logo_ReactRouter.png';
import '/src/styles/About.css';

function About() {
    return (
        <div className='About'>
            <h1>ABOUT</h1>
            <h2>Applicazione creata con l'utilizzo di:</h2>
            <h2>Vite.js<br/>
            <img src={logo_V}
            className="logo"/></h2>
            <h2>React.js<br/>
            <img src={logo_R}
            className="logo"/></h2>
            <h2>React Router<br/>
            <img src={logo_RR}
            className="logo"/></h2>

        <form action='/'>
            <button
            id="default-button"
            type='submit'>
                Homepage
                </button>
        </form>
        </div>
    )
}

export default About