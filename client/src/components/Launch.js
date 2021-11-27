import React, { Fragment} from 'react';
import {useQuery, gql} from "@apollo/client";
import {Link,useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Component } from "react";
import Rocket from './Rocket';
const LAUNCH_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(id: $id) {
      id
      name
      success
      date_local
      rocket {
        id
        name
        type
      }
    }
  }
`;

const ROCKETS = gql`
query RocketsQuery{
  rockets{
    name
    country
    description
  }
}`


export function Launch(){
    // let  {id}  = useParams();
    // const {loading, error, data} = useQuery(LAUNCH_QUERY, {
    //     variables: {id}
    //   });
    //   if (loading) return <h4>Loading...</h4>;
    //   if (error) console.log(error); 
      const {loading:rocketLoading, error:rocketError, data:rocketData} = useQuery(ROCKETS);
      if(rocketLoading) return <h4>Loading...</h4>
      if (rocketError) console.log(rocketError);
      console.log(rocketData)
    return(
        <div>
        {
                          rocketData.rockets.map(rocket=>(
                             <Rocket key={rocket.id} rocket={rocket}/>
                          ))
                        
                     }
                     <Link to='/' className="btn btn-secondary mb-4">Back</Link>
        </div>
    )
}

export default Launch