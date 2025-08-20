
import './App.css'
import image from './assets/hero-image.png'

function App() {
  

  return (
    <>
    <nav className="nav">
      <div className="nav-links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#help">Help</a>
      <a href="#blog">Blog</a>
      <a href="#about">About Us</a>
      </div>
      <div className="nav-btn">
      <button className='btn'>Log In</button>
      <button className='btn'>Sign Up</button>
      </div>
    </nav>
    <section className="hero">
      <div className="hero-content">
        <p className='para'>START SAVING MONEY</p>
        <h1>Smart Credit Card <span className='next-line'>For Your Daily Life</span></h1>
        <button className='btn'>Get Started</button>
      </div>
      <div className='hero-image'>
        <img src={image} alt="Smart Credit Card" />
      </div>
    </section>
      
    </>
  )
}

export default App
