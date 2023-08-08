import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Platform from './components/Platform/Platform';
import MyAccount from './components/My-Account/My-Account';
import Navbar from "./components/Navbar/Navbar";
import Contact from './components/Contact/Contact';
import Lien_1 from './components/Platform/Lien-1/Lien-1';
import Lien_2 from './components/Platform/Lien-2/Lien-2';
import Lien_3 from './components/Platform/Lien-3/Lien-3';
import ErrorPage from './components/Error-page/Error-page';
import Error404 from './components/Error-page/Error404';


function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} errorElement={<ErrorPage />}/>
          <Route path='/platform' element={<Platform />} >
            <Route path='/platform/lien-1' element={<Lien_1 />} />
            <Route path='/platform/lien-2' element={<Lien_2 />} />
            <Route path='/platform/lien-3' element={<Lien_3 />} />
          </Route>
          <Route path='/my-account/:id' element={<MyAccount />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </>
  )
}

export default App
