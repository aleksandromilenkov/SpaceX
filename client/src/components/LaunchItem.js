import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function LaunchItem({launch:{id, mission_name, launch_success}}){
    
    return(
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission:{' '}<span className={classNames({
                        'text-success':launch_success,
                        'text-danger':!launch_success
                    })}>{mission_name}</span></h4>
                   
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${id}`} className="btn btn-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}