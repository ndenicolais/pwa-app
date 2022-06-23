import error from '/images/404.png';
import '/src/styles/NotFound.css';

function NotFound() {
    return (
        <div className='About'>
            <h1>Pagina non trovata</h1>
            <img src={error}
            className="error"
            alt="error"
            />
            </div>
    )
}

export default NotFound