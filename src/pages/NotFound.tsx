import error from '/images/404.png';
import '/src/styles/main.css';

function NotFound() {
    return (
        <div className='NotFound'>
            <h1>Pagina non trovata</h1>
            <img src={error}
            className="NotFound"
            alt="error"
            />
            </div>
    )
}

export default NotFound