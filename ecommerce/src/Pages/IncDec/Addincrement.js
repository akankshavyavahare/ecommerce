import React, { useContext, useState } from 'react';
import { Appcart } from '../../App';
import Addcart from '../Users/Addcart';


const Addincrement = (props) => {
    const [num, setNum] = useState(0);
    const{quantitys} = useContext(Appcart)
    const incAddnum = () => {
        // if(num>=0){
        //     setNum(num+1);
        // }
        setNum(num + 1);
        quantitys(num+1);
    }
    const decSubnum = () => {
        // if(num>0){
        //     setNum(num-1);
        // }
        setNum(num - 1);
        quantitys(num-1);
    }

    return (
        <div className='row'>
            <div className='col-md-6'>
                {num >= 1 && <Addcart itemdetail={props.itemdetail} />}
            </div>
            <div className='col-md-6'>
                <div className="btn-group mt-1" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger" onClick={() => decSubnum()} disabled={num >= 1 ? false : true} >-</button>
                    <button type="button" className="btn btn-light" >{num}</button>
                    <button type="button" className="btn btn-success" onClick={() => incAddnum()} disabled={num <= 4 ? false : true}>+ </button>

                </div>
            </div>



        </div>
    );
};

export default Addincrement;