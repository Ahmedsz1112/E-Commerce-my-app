import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/layout/Layout';
import SignUp from './Components/SignUP/SignUp';
import Login from './Components/Login/Login';
import Account from './Components/AccountDropdown/Account';
import Contact from './Components/Contact/Contact';
import About from './Components/about/About';
import Home from './Components/3-Home/Home';
import Error from './Components/Error/Error';
import WishList from './Components/wish/WishList';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';


function App() {
  let x = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signup/login' element={<Login />} />
        <Route path='signup/login/account' element={<Account />} />
        <Route path='wshlist' element={<WishList/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path=':productID' element={<Details/>} />
        <Route path='*' element={<Error />} />
      </Route>
    )
  )

    return <RouterProvider router={x} /> 
}

export default App;
