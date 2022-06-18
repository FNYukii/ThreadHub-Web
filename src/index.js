import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { getAuth, signInAnonymously } from "firebase/auth";

import './styles/index.css'

import Top from './screens/TopPage'
import NotFoundPage from './screens/NotFoundPage'
import ThreadPage from './screens/ThreadPage'
import Header from './components/Header'

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
        <Route path='/' element={<Top/>}/>
        <Route path='/:threadId' element={<ThreadPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)