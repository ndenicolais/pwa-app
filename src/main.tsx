import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contatti from './pages/Contatti';
import Todo from './components/Todo';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contatti" element={<Contatti />}/>
        <Route path="/src/components/todo" element={<Todo />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)