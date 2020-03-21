/**
 *
 * App
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../About";
import Blog from "../Blog";
import Home from "../Home";
import RestaurantsPage from "../RestaurantsPage";
import RestaurantPage from "../RestaurantPage";
import ProductsPage from "../ProductsPage";
import ProductDetailPage from "../ProductDetailPage";
import NotFound from "../NotFound";
import Layout from "../../components/Layout";


const headerUrls = [
  { name: "Products", to: "/products" },
  { name: "About Us", to: "/about" }
];
const footerUrls = [
  { name: "Products", to: "/products" },
  { name: "About us", to: "/about" },
  { name: "Contact", to: "/about" }
];

function App() {
  return (
    <div>
      {/* <GlobalStyles /> */}
      <Header links={headerUrls} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/products" component={ProductsPage} exact />
        <Route path="/:id/:content" component={ProductDetailPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer links={footerUrls} />
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
