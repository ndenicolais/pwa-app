import '/src/style.css';

function Home() {
  
  return (
    <div className="Home">
          <td>
            <form action="/about">
              <button id="default-button"
              type='submit'>About</button>
            </form>
          </td>
            <td>
              <form action="/contatti">
                <button id="default-button"
                type='submit'>Contatti</button>
              </form>
          </td>
            <td>
              <form action="/src/components/todo">
                <button id="default-button"
                type='submit'>Todo List</button>
              </form>
            </td>
    </div>
  )
}

export default Home