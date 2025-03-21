
import './App.css';
import Navbar from './Components/Navbar/Navbar';
 import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
 
 /*This code snippet is part of a React application that uses the react-router-dom library, which is the standard way to handle routing in React. Routing is how the application handles navigation between different pages or views. */

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'//to pass as props for shop categroy
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      {/* By placing Navbar inside <BrowserRouter>, it ensures that the Navbar is consistently displayed on every page the user navigates to within your React app. */}

      <Routes>

      {/* These decide what page or part of the website to show based on the URL. */}

        <Route path='/' element={<Shop/>}/>

        {/* When you go to the homepage (like www.example.com/), it shows the Shop component, which could be the main shopping page. */}

        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>

        {/* When the user visits /mens path, the ShopCategory component is rendered */}


        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

          {/* The code also listens for a specific product ID in the URL, like /product/1 or /product/45.
               :productId is like a placeholder for any product ID.
If the user visits /product/1, it shows the Product component, but with details specific to the product with ID 1.
This allows your website to show different products depending on what ID is in the URL.*/}

        </Route> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
       <Footer/>

       {/*this footer also should be by default be available overall website, so we are placing it in browserrouter component */}

      </BrowserRouter>
    </div>
  );
}

export default App;
