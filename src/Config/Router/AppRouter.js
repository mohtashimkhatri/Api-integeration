import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen from '../../Pages/Scren.js/Screen';
import Form from '../../Pages/From.js/Form';

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen />} />
        <Route path='form' element={<Form/>} />
        <Route path='form/:id' element={<Form/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
