import axios from 'axios';
import React, { useState } from 'react';

const DeleteModal = (props) => {
    const [data, setData] = useState([]);
  
    const deletehandler = async () => {
        {props.deletehandler()}
    }
   
   
    return (
        <div>
            <div>
                <div className="modal" tabindex="-1" style={{ display: "block" }} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"> DELETE </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{props.message}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => deletehandler()}> Delete</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;