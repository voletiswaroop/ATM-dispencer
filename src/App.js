import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      finalAmount: [],
      twoThound: [],
      fiveHund: [],
      twoHund: [],
      hund: [],
      fifty: [],
      tweenty: [],
      ten: [],
      five: [],
      two: [],
      one: []
    }
  }
  calculateAmount = () => {
    let enteredAmount = document.getElementById("getAmount").value;
    let finalDenominations, twoThound, fiveHund, twoHund, hund, fifty, tweenty, ten, five, two, one;
    finalDenominations = parseInt(enteredAmount);
    twoThound = Math.floor(finalDenominations / 2000);
    finalDenominations = finalDenominations - twoThound * 2000;
    fiveHund = Math.floor(finalDenominations / 500);
    finalDenominations = finalDenominations - fiveHund * 500;
    twoHund = Math.floor(finalDenominations / 200);
    finalDenominations = finalDenominations - twoHund * 200;
    hund = Math.floor(finalDenominations / 100);
    finalDenominations = finalDenominations - hund * 100;
    fifty = Math.floor(finalDenominations / 50);
    finalDenominations = finalDenominations - fifty * 50;
    tweenty = Math.floor(finalDenominations / 20);
    finalDenominations = finalDenominations - tweenty * 20;
    ten = Math.floor(finalDenominations / 10);
    finalDenominations = finalDenominations - ten * 10;
    five = Math.floor(finalDenominations / 5);
    finalDenominations = finalDenominations - five * 5;
    two = Math.floor(finalDenominations / 2);
    finalDenominations = finalDenominations - two * 2;
    one = Math.floor(finalDenominations / 1);
    this.setState({ twoThound: twoThound, fiveHund: fiveHund, twoHund: twoHund, hund: hund, fifty: fifty, tweenty: tweenty, ten: ten, five: five, two: two, one: one });
  }

  render() {
    return (
      <section className="atm-wrapper" >
        <div className="page-title"> ATM Money Dispenser</div>
        <div className="atm-container">
          <div className="atm-screen">
            <h3>Welcome to ATM</h3>
            <label>Enter the amount</label>
            <input type="number" name="total-amount" id="getAmount" />
            <button type="submit" onClick={this.calculateAmount} > Get Money</button >
          </div>
          <div className="denominations-wrapper">
            <p className="title">You will get following amount</p>
            <ul className="denominations">
              <li>{this.state.one} notes of Rs 1</li>
              <li>{this.state.two} notes of Rs 2</li>
              <li>{this.state.five} notes of Rs 5</li>
              <li>{this.state.ten} notes of Rs 10</li>
              <li>{this.state.tweenty} notes of Rs 20</li>
              <li>{this.state.fifty} notes of Rs 50</li>
              <li>{this.state.hund} notes of Rs 100</li>
              <li>{this.state.twoHund} notes of Rs 200</li>
              <li>{this.state.fiveHund} notes of Rs 500</li>
              <li>{this.state.twoThound} notes of Rs 2000</li>
            </ul>
            <p className="total-number">Total note dispensed: {this.state.one + this.state.two + this.state.five + this.state.ten + this.state.tweenty + this.state.fifty + this.state.hund + this.state.twoHund + this.state.fiveHund + this.state.twoThound}</p>
          </div>
        </div>
      </section >
    )
  }
}
