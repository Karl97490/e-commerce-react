import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import productsArr from "./data/products.json"
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h1>This is App component...</h1>
      <Footer />
    </div>
  )
}

export default App
