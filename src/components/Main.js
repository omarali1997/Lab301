import React from 'react';
import HornedBeast from './HornedBeast'
import Row from 'react-bootstrap/Row';
import UserModal from './SelectedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getMain(title, image_url, description) {
    <UserModal title={title} Img={image_url} description={description} />;
  }
  render() {
    let arr;
    if (this.props.Number === "1") {
      arr = this.props.Data.filter((user) => user.horns === 1);

      arr.map((key) => (
        <HornedBeast
          key={key}
          imgURL={arr.image_url}
          title={arr.title}
          dis={arr.description}
          onClick={this.getInfo}
        />
      ));
    }
    return (
      <Row xs={1} md={5} className="g-4">
        {this.props.Data.map(user => (
          <HornedBeast
            id={user._id}
            title={user.title}
            img={user.image_url}
            disc={user.description}
            keyword={user.keyword}
            horns={user.horns}
            myFunction={this.myFunction}
            onClick={this.getMain} />))}
      </Row>
    )
  }
}

export default Main;