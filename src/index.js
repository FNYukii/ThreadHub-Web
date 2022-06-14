import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles/index.css'

import Top from './screens/Top'
import NotFound from './screens/NotFound'
import Thread from './screens/Thread'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Top/>}/>
        <Route path='/:threadId' element={<Thread/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)