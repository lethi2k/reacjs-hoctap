import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import Header from './compoments/Header';
import ProductList from './compoments/ProductList';
const productLists = [
  {
    "id": "21",
    "name": "Intelligent Wooden Shirt",
    "image": "http://lorempixel.com/640/480/abstract",
    "price": "407.00"
  },
  {
    "id": "22",
    "name": "Small Metal Table",
    "image": "http://lorempixel.com/640/480/fashion",
    "price": "39.00"
  },
  {
    "id": "23",
    "name": "Unbranded Cotton Sausages",
    "image": "http://lorempixel.com/640/480/city",
    "price": "922.00"
  },
  {
    "id": "24",
    "name": "Sleek Frozen Chips",
    "image": "http://lorempixel.com/640/480/sports",
    "price": "697.00"
  },
  {
    "id": "25",
    "name": "Ergonomic Steel Shirt",
    "image": "http://lorempixel.com/640/480/food",
    "price": "498.00"
  },
  {
    "id": "26",
    "name": "Intelligent Concrete Bacon",
    "image": "http://lorempixel.com/640/480/nature",
    "price": "461.00"
  },
  {
    "id": "27",
    "name": "Handcrafted Concrete Hat",
    "image": "http://lorempixel.com/640/480/fashion",
    "price": "580.00"
  },
  {
    "id": "28",
    "name": "Incredible Cotton Tuna",
    "image": "http://lorempixel.com/640/480/food",
    "price": "57.00"
  },
  {
    "id": "29",
    "name": "Generic Plastic Tuna",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "836.00"
  }
];
function App() {
  return (
    <div className="App">
     {/* <Header products = {productLists}/> */}
     <ProductList products = {productLists}/>
    </div>
  );
}

export default App;
