
function Thead(props) {
    return (
       
            <thead>
                <tr>
                    {this.props.titles.map(
                        (title) => (<Th value= {title}/>))
                        } 
                </tr>
            </thead>
       
    );
}
function Th({value}) {
    <th scope="col">{{value}}</th>
}
export default Thead;