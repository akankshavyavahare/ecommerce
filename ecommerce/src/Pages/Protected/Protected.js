import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate();
    useEffect(()=>{
        let ls = localStorage.getItem("islogin");
        if(!ls){                   
            navigate('/')  // if not login then show login page 
        }
    })
    return (
        <div>
            {props.Component}
        </div>
    );
};

export default Protected;