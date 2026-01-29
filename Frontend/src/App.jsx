import './App.css'
import {Route, Routes ,BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home';
import Login_Sign_Forms from './pages/Login_Sign_Forms';
import Layout from './pages/Layout';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import AddProduct from './pages/AddProduct';
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/login-signup" element={<Login_Sign_Forms />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
