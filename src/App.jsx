import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Project from "./components/Project"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
        <ToastContainer />
        <Header />
        <About />
        <Project />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App