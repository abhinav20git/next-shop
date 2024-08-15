import Cart from './components/cart/Cart'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Products from './components/product/Products'
import { Provider } from 'react-redux'
import store from './features/store'
import SignIn from './components/SignIn'
import LogIn from './components/LogIn'

function App() {

  return (
    <Provider store={store}>
      
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />
        <Route path="/products" element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Provider>
  )
}

export default App
