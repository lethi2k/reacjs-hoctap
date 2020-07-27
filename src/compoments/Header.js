import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const products = this.props.products
    return products.map((item, index) => (
      <table class="table" key={index} >
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
  }
};
//rafc
//rcc