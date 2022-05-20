import '/src/style.css';

function Home() {
  
  return (
    <div className="Home">
          <dt>
            <form action="/about">
              <button id="default-button"
              type='submit'>About</button>
            </form>
          </dt>
            <dt>
              <form action="/contatti">
                <button id="default-button"
                type='submit'>Contatti</button>
              </form>
          </dt>
            <dt>
              <form action="/src/components/todo">
                <button id="default-button"
                type='submit'>Todo List</button>
              </form>
            </dt>
    </div>
  )
}

export default Home