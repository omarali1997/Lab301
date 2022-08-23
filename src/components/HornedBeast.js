import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Favorites: " "

    }
  }

  incrementFavorites = () => {
    this.setState({
      Favorites: this.state.Favorites + "❤️"
    })
  }





  render() {
    return (
      // <div>
      //   <h2> {this.props.title} </h2>
      //   <p> {this.props.description} </p>
      //   <img src={this.props.imageUrl} alt='image' title={this.props.title} ></img>
      //     <style jsx>
      //       {`
      //       img {
      //         width: 600px;
      //         height: 400px; 
      //       }
      //     `}
      //     </style>
      //     <p>Num Of Click: 0</p>
      // </div>
      <div>
      <Col>
        <Card style={{ width: '18rem' , borderColor :'purple'  }}>

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.imageUrl} onClick={this.incrementFavorites}  />
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>
              Favorites: {this.state.Favorites}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </div>
    )
  }

}


export default HornedBeast;
