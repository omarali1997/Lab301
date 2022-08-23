import React from 'react';
import HornedBeast from './HornedBeast'
import Row from 'react-bootstrap/Row';
import data from './data.json';



let beastData = data.map(element =>
  <HornedBeast
    key={element._id}
    title={element.title}
    img={element.image_url}
    description={element.description}
  />
);

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row xs={1} md={5} className="g-4">
        <beastData/>

        
      </Row>
    )
  }
}

export default Main;