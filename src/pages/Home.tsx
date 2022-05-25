import { Outlet } from 'react-router-dom';
import logo from '/public/logo-512x512.png';
import '/src/style.css';

function Home() {
  
  return (
    <div className='Home'>
      <h1>React App TS</h1>
      <img src={logo} className="Home-logo" alt="logo" />
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
                  <Outlet/>
                  </div>
          )
}

export default Home