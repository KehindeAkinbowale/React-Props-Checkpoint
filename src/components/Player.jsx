import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Player({name = "Default Name", team = "Default Team", jerseyNumber = 0 , 
ImgURL = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais"
, age = 0}) {
  return (
    <Card className='col-3'>
      <Card.Img variant="bottom" src={ImgURL} width="300" />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className='lead'> <span className='fw-bold'>Player Name :</span> {name}</p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p className='lead'> <span className='fw-bold'>Team :</span> {team}</p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p className='lead'><span className='fw-bold'>Jersey Number :</span> {jerseyNumber}</p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p className='lead'><span className='fw-bold'>Age :</span> {age}</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default Player;