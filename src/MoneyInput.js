import React, { Component } from 'react';
import './MoneyInput.css';

class MoneyInput extends Component {
  /**
   * Given some input value, return it formatted as currency
   * @param {String} input
   * @returns {String}
   */
  static formatCurrency(input) {
    const inputFloat = parseFloat(input);
    const roundedNoDecimal = Math.round(inputFloat * 100);
    const string = roundedNoDecimal.toString();

    return string.substr(0, string.length - 2) + '.' + string.substr(string.length - 2, 2);
  }

  state = {
    value: '0.00',
  };

  onBlur = () => {
    this.setState({
      value: MoneyInput.formatCurrency(this.state.value),
    });
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="money-input">
        $<input
          type="number"
          min="0"
          max="100"
          step="0.01"
          value={this.state.value}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default MoneyInput;
