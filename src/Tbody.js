import Button from 'react-bootstrap/Button'

function Tbody(props) {
    return (
       
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    {this.props.data.map(
                        (value) => (<Th value= {value}/>))
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
            </tbody>
     
    );
}
function Td({value}) {
    <td >{{value}}</td>
}
export default Tbody;