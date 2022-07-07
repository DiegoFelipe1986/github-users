import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout  from './layouts/MainLayout.js';
import ProductLayout from './layouts/ProductLayout.js'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ < MainLayout /> }>
          </Route>
          <Route path="/products" element={ < ProductLayout /> } >

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;