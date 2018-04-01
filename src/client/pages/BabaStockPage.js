import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStockData } from '../actions/index';
import requireAuth from '../components/hocs/requireAuth';

class BabaStockPage extends Component {
 componentDidMount() {
  //this.props.fetchStockData();
 }

 render() {
  console.log(this.props.stockData);
  return <div />;
 }
}

function mapStateToProps({ stockData }) {
 return { stockData };
}

export default {
 component: connect(mapStateToProps, { fetchStockData })(BabaStockPage),
 loadData: ({ dispatch }) => dispatch(fetchStockData())
};
