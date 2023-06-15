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
    })
    const [ productTypes, setProductTypes] = useState([])
    useEffect(() => {
        const Callformapi = async () => {
            let res = await axios.get('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory')
            console.log(res.data.data);
            setProductTypes(res.data.data);
        }
       
        Callformapi();
    }, [])
    const onChangeHandler = (fieldname, value) => {
        setIsform({ ...isform, [fieldname]: value })
    }
    const onsumbithandler = async (e) => {
        e.preventDefault()
        let obj = {
            "ProductSku": isform.ProductSku,      // create Product 
            "ProductName": isform.ProductName,
            "ProductPrice": isform.ProductPrice,
            "ProductShortName": isform.ProductShortName,
            "ProductDescription": isform.ProductDescription,
            "CreatedDate": isform.CreatedDate,
            "DeliveryTimeSpan": isform.DeliveryTimeSpan,
            "CategoryId": isform.CategoryId,
            "ProductImageUrl": isform.ProductImageUrl,
        }
        let subres = await axios.post("http://onlinetestapi.gerasim.in/api/Ecomm/CreateProduct", obj)
        console.log(subres);
    }
    return (
        <div className='offset-3 col-6'>
            <form onSubmit={(e)=>onsumbithandler(e)}>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control"  value={isform.ProductName} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => onChangeHandler("ProductName", e.target.value)}></input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
                    <input type="Number" className="form-control" value={isform.ProductPrice} id="exampleInputPassword1" onChange={(e) => onChangeHandler("ProductPrice", e.target.value)}></input>
                </div>
                <div className="form-group mb-3">
                    <label htmFor="exampleInputPassword1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" value={isform.ProductDescription} id="exampleInputPassword1" onChange={(e) => onChangeHandler("ProductDescription", e.target.value)}></input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> delivery timespan</label>
                    <input type="text" className="form-control" value={isform.DeliveryTimeSpan} id="exampleInputPassword1" onChange={(e) => onChangeHandler("DeliveryTimeSpan", e.target.value)}></input>
                </div>
                <div className="form-group mb-3">
                    <label> Product Type </label>
                    <select class="form-select" value={isform.CategoryId} onChange={(e) => onChangeHandler("CategoryId", e.target.value)}>
                        <option defaultValue={""}> Choose one  </option>
                        {productTypes.map((item) => {
                            return (
                                <option value={item.categoryId}>{item.categoryName}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" > Product img </label>
                    <input type="text" className="form-control" value={isform.ProductImageUrl} id="exampleInputPassword1" onChange={(e) => onChangeHandler("ProductImageUrl", e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;