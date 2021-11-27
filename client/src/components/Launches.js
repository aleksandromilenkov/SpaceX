import React , {Component, Fragment} from 'react';
import {
    useQuery,
    gql
  } from "@apollo/client";
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

  const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches(limit: 10) {
        id
        mission_name
        launch_success
      }
  }
  `;

  

 function Launches(){
     const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <h4>Loading...</h4>;
    if (error) console.log(error);
  
          return(
              <Fragment>
              
                <h1 className="display-4.my-3">Launches</h1>
                <MissionKey/>
                 <div>
                     {
                          data.launches.map(launch=>(
                             <LaunchItem key={launch.id} launch={launch}/>
                          ))
                        
                     }
                 </div>
            </Fragment>
        );
    
}

export default Launches