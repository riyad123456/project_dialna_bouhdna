
function Thead(props) {
    return (
            <thead>
                <tr>
                    {props.titles.map(
                        (title) => <Th value= {title}/>
                        )}
                </tr>
            </thead>
       
    );
}
function Th({value}) {
    return (
    <th scope="col">{value}</th>
    );
}
export default Thead;