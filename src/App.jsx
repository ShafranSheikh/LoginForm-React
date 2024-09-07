import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FormContent from './components/FormContent'
import SignUpFormContent from './components/SignUpFormContent'


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FormContent />} />
          <Route path="/SignUpFormContent" element={<SignUpFormContent />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
