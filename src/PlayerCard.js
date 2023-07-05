import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const PlayerCard=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.url} />
    <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        {el.name} plays for {el.team}
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroup.Item>his from{el.nation}</ListGroup.Item>
        <ListGroup.Item>his T-shirt number is {el.num}</ListGroup.Item>
        <ListGroup.Item>and he is {el.age} years old</ListGroup.Item>
    </ListGroup>
    <Card.Body>
        <Card.Link href="/"></Card.Link>
        <Card.Link href="/">Another Link</Card.Link>
    </Card.Body>
    </Card>
    )
}

export default PlayerCard