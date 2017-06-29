import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MoneyInput from './MoneyInput';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<MoneyInput {...props } />);

  return {
    props,
    enzymeWrapper,
  };
}

it('renders exactly one input', () => {
  const enzymeWrapper = setup().enzymeWrapper;
  expect(enzymeWrapper.find('input')).to.have.length(1);
});

it('sets default value to 0.00', () => {
  const enzymeWrapper = setup().enzymeWrapper;
  expect(enzymeWrapper.find('input').first().props().value).to.equal('0.00');
});

it('sets value to state', () => {
  const value = '9.99';
  const enzymeWrapper = setup().enzymeWrapper;
  enzymeWrapper.setState({ value });

  expect(enzymeWrapper.find('input').first().props().value).to.equal(value);
});
