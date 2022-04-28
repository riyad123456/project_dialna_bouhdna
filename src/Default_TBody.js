import React from 'react';
import { useEffect, useState } from 'react';







function Default_TBody({data}) {
  
  var selectedRow = [];
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({})
  
  const list = data.map(
    (json,val) => {
      let li = [];
        Object.keys(json).map((key,value) => {
            li = [...li,json[key]]
        }
          
        )
       
       return <Tr  index = {val}  values= {li}/>
    }
)

  return(
    <>
    <tbody>
      
      {list}
        
    </tbody>
   
    
    </>
);
  
}

function Td({val}) {
  return (
      <td >{val}</td>
  );
}

function Tr({values}){
 
  return (
  <tr>
                  
                  {values.map(
                      (value) => (<Td val= {value}/>))
                      }
                  <td>
                      
                  </td>
              </tr>
  );
}


export default Default_TBody;