import React, {useEffect, useState} from 'react'
import TestComponent from './TestComponent'
/* This component is to create testing apps without changing real components of this app*/

export default function TestContainer() {

    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            
            redirect: 'follow'
          };
          
          fetch("http://universities.hipolabs.com/search?country=United+States", requestOptions)
            .then(response => response.json())
            .then(result => {
                //This is what the promise will do if everything is ok
                console.log(result)
                setUniversities(result)
            })
            .catch(error => console.log('error', error));
    
      return () => {
        
      }
    }, [])
    


  return (

    <div>
        <h1>
          Test header
        </h1>
        <TestComponent universities={universities} />  
    </div>
  )
}
