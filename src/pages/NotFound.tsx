import '/src/styles/NotFound.css';

function NotFound() {
    return (
        <div className='About'>
        <h1>ERROR</h1>
        <h2>Pagina non trovata!</h2>
        <br/>
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

export default NotFound