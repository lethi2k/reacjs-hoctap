import React, { useState } from 'react';
import PropTypes from 'prop-types'

const UpdateForm = ({onAdd,onUpdate}) => {
    console.log(onUpdate);
    const [ValueInput, setValueInput] = useState({});
    const onHandleChange = (e) =>{
      console.log(e.target.value);
      const {name, value} = e.target;
        setValueInput({
          ...ValueInput,
          [name]: value
        });
    };
    const onHandleSubmit=(e)=>{
      e.preventDefault();
      console.log("abca");
        onAdd(ValueInput);
    };
    return (
        <div className="index">
            <h1>Update form</h1>

            <form action="" onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Product name</label>
                    <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" onChange={onHandleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">images</label>
                    <input type="input" className="form-control" id="exampleInputPassword1" name="images" onChange={onHandleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Gia</label>
                    <input type="input" className="form-control" id="exampleInputPassword1" name="price" onChange={onHandleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm
