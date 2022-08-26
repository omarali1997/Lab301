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
        <Col style={{ margin: "-5px" }}>
          <Card style={{
            border: "1px solid",
            width: "280px",
            height: "550px",
            justifyContent: "center",
            margin: "20px",
          }}>

            <Card.Body>
              <Card.Title>{this.props.id}</Card.Title>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Img variant="top" src={this.props.img} alt="image" title={this.props.title} onClick={this.incrementFavorites}
                style={{ border: "1px solid purple", width: "200px", height: "200px" }} />
              <Card.Text>
                <p>keyword : {this.props.keyword}</p>
                <p >horns :{this.props.horns}</p>
                <p >{this.props.description}</p>
              </Card.Text>
              <Card.Text style={{
                color: "purple",
                fontSize: "20px",
                FormText: "Times New Roman, Times, serif",
              }}>
                Favorites: {this.state.Favorites}
              </Card.Text>
              <Button variant="primary" onClick={() => { this.props.myFunction(this.props.title) }} >select</Button>

            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }

}


export default HornedBeast;
