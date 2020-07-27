import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export const index = ({ products, onRemove,onUpdate }) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  };

  const onHandleUpdate = (id) => {
    onUpdate(id);
    console.log(onUpdate);
  };

  const productDetail = (id) => {
    console.log(id);
    // let { id } = useParams();
  };

  return (
    <div>
      {/* Begin Page Content */}

      {/* Page Heading */}

      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">img</th>
                  <th scope="col">price</th>
                  <th scope="col">edit</th>
                </tr>
              </thead>
              {products.map((item, index) => (
                <Router>
                 <Switch>
                <tbody key={index}>
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td onClick={() => productDetail(item.id)} onClick={() => onHandleUpdate(item.id)}><Link to = {"list/" + item.id}>{item.name}</Link></td>
                    <td>
                      <img src={item.image} alt="hinh-anh" width="20%" />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => onHandleRemove(item.id)}
                      >
                        delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary mx-3"
                      
                      >
                        update
                      </button>
                    </td>
                  </tr>
                </tbody>
                </Switch>
                </Router>
              ))}
            </table>

            
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </div>
  );
};
export default index;
