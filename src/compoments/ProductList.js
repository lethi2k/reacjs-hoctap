import React from "react";
const mystyle = {
  width: "80%",
  fontFamily: "Arial"
}
const ProductLists = ({ products }) => {
  return products.map((item, index) => (
    
    <table class="table" key={index} style={mystyle}>
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">img</th>
          <th scope="col">price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td><img src= {item.image} alt ="hinh-anh" width ="20%"/></td>
          <td>{item.price}</td>
        </tr>
      </tbody>
    </table>
  ));
};

export default ProductLists;
//rafc
//rcc