import React, { useEffect, useState } from 'react';
import axios from 'axios'
const AddProduct = () => {
    const [isform, setIsform] = useState({
        ProductSku: "",
        ProductName: "",
        ProductPrice: 0,
        ProductShortName: "",
        ProductDescription: "",
        CreatedDate: new Date(),
        DeliveryTimeSpan: "",
        CategoryId: 0,
        ProductImageUrl: "",
        productTypes: [],
    })
    useEffect(() => {
        const Callformapi = async () => {
            let res = await axios.get('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory')
            console.log(res.data.data);
        }
        Callformapi();
    }, [])
    const onChangeHandler = (fieldname, e) => {
        setIsform({ ...isform, [fieldname]: e.target.value })
    }
    return (
        <div className='offset-3 col-6'>
            <form>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => onChangeHandler("ProductSku", e)}></input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-group mb-3">
                    <label htmFor="exampleInputPassword1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> delivery timespan</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-group mb-3">
                    <label> Product Type </label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Choose one product</option>
                        {isform.productTypes.map((item) => {
                            return (
                                <option value={item.CategoryId}>{item.categoryName}</option>
                            )
                        })}

                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> Product img </label>
                    <input type="text" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;