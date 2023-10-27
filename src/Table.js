import Table from 'react-bootstrap/Table';

function List(){
    return (
    <div class="container text-left">
        <Table striped bordered hover variant="white">
        <thead>
            <tr>
            <th>id</th>
            <th>descricao</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td><a href="#">Relação de adquirente ativos</a></td>
            </tr>
            <tr>
            <td>2</td>
            <td><a href="#">Clientes</a></td>
            </tr>
            <tr>
            <td>3</td>
            <td><a href="#">PVs sem vigência cadastrada</a></td>
            </tr>
        </tbody>
        </Table>
    </div>
    );
}
export default List;