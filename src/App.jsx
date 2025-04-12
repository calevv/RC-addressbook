import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/contact/:id" element={<Contact />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
