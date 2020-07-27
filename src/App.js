import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.scss';
// import Header from './compoments/Header';
// import ProductList from './compoments/ProductList';
import "bootstrap/dist/css/bootstrap.css";
import Sliderbar from './Slidebar';
import Topbar from './Topbar';
import Productbar from './Products';
import AddForm from './compoments/AddForm/Index'
import { productLists } from './dataFake';
import Dashboard from './compoments/Dashboard';
import ProductDetail from './Products/ProductDetail';
import UpdateForm from './compoments/UpdateForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const [products, setproducts] = useState(productLists);
  // const test =
  // {
  //   "propBool": "true"
  // };

  // const [state, setState] = useState(false);
  // const clickv = () => {
  //   setState({
  //     state: true
  //   })
  // };

  // const shoot = () => {
  //   document.getElementById("p2").style.background = "blue";
  // };
  const onHandleRemove = (id) => {
    const newproducts = products.filter(product => product.id !== id);
    setproducts(newproducts);
    console.log(products);
    console.log(newproducts);
  };

  const onHandleUpdate = (id) => {
    const newproducts = products.filter(product => product.id == id);
    console.log(newproducts);
    setproducts(newproducts);
   
  };

  const onHandleAdd = (product) => {
    console.log(product);

    setproducts(
      [
        ...products,
        product
      ]
    );
    return <Redirect to='/list' />

  };


  return (
    // <div className="App">

    //   <button onClick={shoot} id = "p2">click vao me</button>
    //   <h3>Bool: {test.propBool === "true" ? "da co bo" : "chua co bo"}</h3>
    //   <div>
    //     <p>{state ? "true" : "false"}</p>
    //     <button onClick={clickv}>click vao me</button>

    //     <p>You clicked {count} times</p>
    //     <button onClick={() => setCount(count + 1)}>
    //       Click me
    //   </button>
    //   </div>
    //   {/* <Header products = {productLists}/> */}
    //   <ProductList products={productLists} />
    // </div>
    <Router>
      <div>
        {/* Page Wrapper */}
        <div id="wrapper">

          <Sliderbar />
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Switch>
                  <Route exec path="/add">
                    <AddForm onAdd={onHandleAdd} />
                  </Route>
                  <Route exec path="/update">
                    <UpdateForm onAdd={onHandleAdd} />
                  </Route>
                  <Route exec path="/list">
                    <Productbar products={products} onRemove={onHandleRemove} onUpdate={onHandleUpdate} />
                  </Route>
                  <Route exec path="/"><Dashboard /></Route>

                </Switch>
              </div>
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2020</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}

      </div>
    </Router>
  );
}

export default App;
