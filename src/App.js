 
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Data from './components/Data.json';
import UserModal from './components/SelectedBeast';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      selBeast:{}
    }
  }
  myFunction=(title)=>{
    const selectedBeast=Data.find(beast => beast.title === title);
    this.setState({
      show:true,
      selBeast:selectedBeast
    })
  }

  handleClose=()=>{
    this.setState({
      show:false})
  }
  render() {
    return (
      <div>

        <Header />
        <Main Data={Data} myFunction={this.myFunction}/>
        <Footer />
        <UserModal showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} />

      </div>
    )
  }
}




export default App;

