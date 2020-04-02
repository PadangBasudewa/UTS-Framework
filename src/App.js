import React, { Component } from "react";
import "./App.css";
import Product from "./Product";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };

    this.addTotal = this.addTotal.bind(this);
  }

  addTotal(price) {
    this.setState({
      total: this.state.total + price,
    });
  }

  render() {
    const services = this.props.products.map((product, index) => {

      // Buat component Product untuk setiap product di dalam Array Products
      // Perhatikan kita juga mengirim fungsi addTotal
      return <Product product={product} addTotal={this.addTotal} key={index}/>;
    })

    return (
      <form id="app">
        <h1>Friselle Cake</h1>
        <ul>
          {services}
        </ul>

        <div className="total">
          Total:
          <span>Rp {this.state.total}</span>
        </div>
      </form>
    );
  }
}
export default App;