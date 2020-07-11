import React from "react";

const Header = ({ products }) => {
  return products.map((item, index) => (
    <table class="table" key={index}>
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
          <td>{item.img}</td>
          <td>{item.price}</td>
        </tr>
      </tbody>
    </table>
  ));
};

export default Header;
//rafc
