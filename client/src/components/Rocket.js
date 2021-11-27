import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function Rocket({rocket:{name,description, country}}){
    
    return(
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Rocket:{' '}<span className="text-success"
                     
                    >{name}</span></h4>

                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>
        </div>
    )
}