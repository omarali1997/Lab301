import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

  
  render() {
    return (
      <div>

        <Header />
        <Main />
        <Footer />

      </div>
    )
  }
}

export default App;