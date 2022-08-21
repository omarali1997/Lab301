import React from 'react';
import HornedBeast from './components/HornedBeast';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

class App extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <Main />
        <HornedBeast />
        <HornedBeast />
        <Footer />

      </div>
    )
  }
}

export default App;