import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Favorites: " "

    };
  }

  incrementFavorites = () => {
    this.setState({
      Favorites: this.state.Favorites + "❤️"
    })
  }

  render() {
    return (

      <>
        <Col>
          <Card style={{ width: '18rem', borderColor: 'purple' }}>

            <Card.Body>
              <Card.Title>{this.props.id}</Card.Title>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img} alt="image" title={this.props.title} onClick={this.incrementFavorites} />
            <Card.Text>
                <p>keyword : {this.props.keyword}</p>
                <p >horns :{this.props.horns}</p>
                <p >{this.props.disc}</p>
              </Card.Text>
            <Card.Text>
              Favorites: {this.state.Favorites}
            </Card.Text>
            <Button variant="primary" onClick={()=>{this.props.myFunction(this.props.title)}} >select</Button>
            
          </Card.Body>
        </Card>
      </Col>
      </>
    )
  }

}


export default HornedBeast;
