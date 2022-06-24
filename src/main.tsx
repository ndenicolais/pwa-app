import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';
import NotFound from './components/NotFound';
import Footer from './components/footer';
import './styles/main.css';

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/src/components/todo" element={<Todo />}/>
    <Route path="*" element={<NotFound />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
)