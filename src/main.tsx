import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Todo from './components/Todo';
import NotFound from './pages/NotFound';
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