import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Data from './components/Data.json';
// import UserModal from './components/SelectedBeast';
import Forms from './components/Forms';

let Horn1 = Data.filter(beast => beast.horns === 1);
let Horn2 = Data.filter(beast => beast.horns === 2);
let Horn3 = Data.filter(beast => beast.horns === 3);
let All = Data.filter(beast => beast.horns > 3);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selBeast: {}
    }
  }
  myFunction = (title) => {
    const selectedBeast = Data.find(beast => beast.title === title);
    this.setState({
      show: true,
      selBeast: selectedBeast
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div>

        <Header />
        <Forms Data1={Horn1} Data2={Horn2} Data3={Horn3} Data4={All} Data5={Data} myFunction={this.myFunction} />
        <Footer />
        {/* <UserModal showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} /> */}

      </div>
    )
  }
}

export default App;