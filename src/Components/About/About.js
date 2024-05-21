import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../About/About.css';
import '../assets/icons/facebook.png'
function About() {
    return (
  <>
<section className='mainBackground'>
<Container>
      <Row>
      <h1 className='TeamHeaderMain'>Work with an amazing</h1>
      <p className='subtextMain'>We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
      <Button className='button' variant="secondary">Secondary</Button>{' '}
      <p>Find us on</p>
        <image src="/home/yazan/Front-End/src/Components/assets/icons/facebook.png"></image>
        <image src="f">twitter</image>
        <image src="f">instagram</image>
        <Col>
         </Col>
      </Row>
    </Container>
</section>
<section>
  <h1 className='teamHeader'>Our amazing Team</h1>
  <p className='subtext'>Welcome to the team! We are a group of passionate indivuals working togetjer to achieve our goals.</p>
  <p className='subtext'> Get to know hte face beheind the success of Melody Hub.</p>
<Container>
  <CardGroup className='groupCards'>
      <Card className="card">
      <Card.Img className="imageSize" src="https://avatars.githubusercontent.com/u/104578607?v=4"/>
      <Card.Body>
        <Card.Title className="TitleCard">Reem</Card.Title>
        <Card.Subtitle className='subtile'>Backend</Card.Subtitle>
          <small className="text-muted">a recent AI graduate exploring new horizons in the world of full-stack development.</small>
      </Card.Body>
      </Card>

      <Card>
        <Card.Img className="imageSize" src="https://avatars.githubusercontent.com/u/110684367?v=4"/>
        <Card.Body>
        <Card.Title className="TitleCard">Yazan Bargothi</Card.Title>
        <Card.Subtitle className='subtile'>frontend</Card.Subtitle>
          <small className="textCard">father to 3 amazing kids and a hobbyist programmer. </small>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="imageSize" src="https://avatars.githubusercontent.com/u/162112792?v=4"/>
        <Card.Body>
        <Card.Title className="TitleCard">Muhammad Ibraheem</Card.Title>
        <Card.Subtitle className='subtile'>Backend</Card.Subtitle>
          <small className="textCard">i graduated from Al-Balqa Applied University with a major in Computer Science</small>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="imageSize" src="https://avatars.githubusercontent.com/u/162107981?v=4"/>
        <Card.Body>
        <Card.Title className="TitleCard">fadi </Card.Title>
        <Card.Subtitle className='subtile'>Leader</Card.Subtitle>
          <small className="textCard">Software Engineering || Passionate full stack developer. I enjoy working on both the front-end and back-end of web applications.</small>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="imageSize" src="https://avatars.githubusercontent.com/u/127548222?v=4"/>
      <Card.Body>
      <Card.Title className="TitleCard">mhawich</Card.Title>
        <Card.Subtitle className='subtile'>Fullstack</Card.Subtitle>
          <small className="textCard">a programer , hard work, and a amazing husband</small>
        </Card.Body>
      </Card>
    </CardGroup>
    </Container>
    </section>
    </>
    );
  }
  
  export default About;