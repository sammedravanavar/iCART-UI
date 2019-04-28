import React, { Component } from "react";
import './main.css'
import Header from '../Header';
import Chatbot from '../Chatbot';
import Graph from '../Graph';
import CartList from '../Cartlist';
import Recommender from '../Recommender';

class App extends Component {
   render() {
    return (
      <div>
        <Header/>
        <div className="body">
          <Chatbot />
          <Graph {...this.props} />
          <CartList {...this.props} />
        </div>
        <Recommender {...this.props} />
      </div>
    );
  }
}

export default App;