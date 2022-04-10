import React, {useEffect} from 'react'
import TestComponent from './TestComponent'
/* This component is to create testing apps without changing real components of this app*/

export default function TestContainer() {

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            body: "",
            redirect: 'follow'
          };
          
          fetch("http://universities.hipolabs.com/search?country=United+States", requestOptions)
            .then(response => response.json())
            .then(result => {
                //This is what the promise will do if everything is ok
                console.log(result)
            })
            .catch(error => console.log('error', error));
    
      return () => {
        
      }
    }, [])
    


  return (
    <div>
        <TestComponent />  
    </div>
  )
}
