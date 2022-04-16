import Button from 'react-bootstrap/Button'



function Tbody(props) {
   
    return (
       
            <tbody>
                {props.data.map((subtable) =>
                        <Tr values= {subtable}/>
                    )}
            </tbody>
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
                        
                        <ul class="list-inline m-0">
                            
                            <li class="list-inline-item">
                            <Button variant="outline-warning">Edit</Button>
                            </li>
                            <li class="list-inline-item">
                            <Button variant="outline-danger">Delete</Button>
                            </li>
                        </ul>
                    </td>
                </tr>
    );
}
export default Tbody;