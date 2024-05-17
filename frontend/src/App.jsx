
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Product from "./components/Products"
import Contact from "./components/Contact"
import Menu from  "./components/Menu"
import Login from "./components/Login"
import Footer from "./components/Footer"
import Register from "./components/Register"
import AboutUs from "./components/About"
import Compras from "./components/Compras"
import ProductView from "./components/ProductView";

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/product' component={Product} exact>
            <Product />
          </Route>
          <Route path='/about' component={AboutUs} exact>
            <AboutUs/>
          </Route>
          <Route path='/menu' component={Menu} exact>
            <Menu />
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
          <Route path='/login' component={Contact} exact>
            <Login />
          </Route>
          <Route path='/register' component={Register} exact>
            <Register />
          </Route>
          <Route path='/producto-view/:id' exact>
            <ProductView />
          </Route>
        </Switch>
      </Router>


      <Footer />
    </>
    

  
  );
}

export default App
