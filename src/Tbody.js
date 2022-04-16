import React from 'react';
import Button from 'react-bootstrap/Button'


class Tbody extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        My_Array: new Array().concat(props.data)
      };
    }
    componentDidMount() {
     console.log(this.state.My_Array)
    }
    rows = ()=> {
        return this.state.My_Array.map((subtable,index)=>{
          return <Tr evClick={() => {this.removeElem(index)}} values= {subtable}/>
        });
      }
      removeElem(i) {
        this.setState({
          My_Array: this.state.My_Array.filter((val,j) => i !== j)
        })
      }
    render() {
       return(
            <tbody>
                {this.rows()}
            </tbody>
       );
    }
}
function Td({val}) {
    return (
        <td >{val}</td>
    );
}
function Tr({values,evClick}){
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
                            <Button variant="outline-danger" onClick={evClick}>Delete</Button>
                            </li>
                        </ul>
                    </td>
                </tr>
    );
}
export default Tbody;