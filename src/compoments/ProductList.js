import React from "react";
const mystyle = {
  width: "80%",
  fontFamily: "Arial",
  margin: "0px auto",
}
const ProductLists = ({ products }) => {
  products.forEach(element => {
    console.log(element.name);
  });
  const test = () => {
    alert("golbal");
   
  }
  return (
    <div className="ProductList" >
      <table style={mystyle} border="1px">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">img</th>
            <th scope="col">price</th>
            <th scope = "col">edit</th>
          </tr>
        </thead>
        {products.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td><img src={item.image} alt="hinh-anh" width="20%" /></td>
              <td>{item.price}</td>
              <td><button type="button" className="btn btn-primary" onClick={test}>Xoa</button></td>
            </tr>
          </tbody>

        ))}
      </table>
    </div>
  );
};

export default ProductLists;
//rafc
//rcc