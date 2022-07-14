import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { getAuth, signInAnonymously } from "firebase/auth";

import './styles/index.css'

import Header from './components/Header'
import TopScreen from './screens/TopScreen'
import ThreadScreen from './screens/ThreadScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import Footer from './components/Footer'

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log('hello')
  })
  .catch((error) => {
    console.log(`code: ${error.code}, message] ${error.message}`)
  });

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route path='/' element={<TopScreen/>}/>
        <Route path='/threads/:threadId' element={<ThreadScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  </React.StrictMode>
)