import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import { DOM } from 'rx-dom';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
import { createRandomData, addDataPoint } from '../utils/data-helpers';
import { loadBasket, startBasketStream } from '../actions';

class LiveChart2 extends Component {

  constructor (props) {
    super(props);
    this.updateLiveData = this.updateLiveData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleStartLiveUpdate = this.handleStartLiveUpdate.bind(this);
    this.handleStopLiveUpdate = this.handleStopLiveUpdate.bind(this);
    this.source = DOM.fromEventSource("http://192.168.0.102:8080/basket/stream");
    this.subscriber = null;
    this.state = {
      data1: [],
      data2: [],
      liveUpdate: false
    };
  }

  fetchData() {
    var liveChart = this;
    liveChart.source.subscribe(function (data) {
      var jsonObj = JSON.parse(data);
      var askArr = [new Date(jsonObj.timeStamp).getTime(), jsonObj.askPrice];
      var bidArr = [new Date(jsonObj.timeStamp).getTime(), jsonObj.bidPrice];
      liveChart.updateLiveData(askArr, bidArr);
    });
  }

  componentDidMount () {
    this.handleStartLiveUpdate();
  }

  updateLiveData (askArr, bidArr) {
    const { data1, data2} = this.state;

    this.setState({
      data1: addDataPoint(data1, askArr),
      data2: addDataPoint(data2, bidArr)
    });
  }

  handleStartLiveUpdate (e) {
    e && e.preventDefault();
    this.fetchData();
    //this.props.startBasketStream();
    this.setState({
      liveUpdate: true
    });
  }

  handleStopLiveUpdate (e) {
    e.preventDefault();
    this.setState({
      liveUpdate: false
    });
  }

  render() {
    const { data1, data2, liveUpdate } = this.state;
    const {basketData} = this.props;
    console.log(basketData);

    return (
      <div className="app">

        <HighchartsChart>
          <Chart />
          <Title>NAV Analysis</Title>
          <Legend />

          <XAxis type="datetime">
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Nav</YAxis.Title>
            <LineSeries name="Ask price" data={basketData.askArr} />
            <LineSeries name="Bid price" data={basketData.bidArr} /> 
            {/* <LineSeries name="Ask price" data={data1} />
            <LineSeries name="Bid price" data={data2} /> */}
          </YAxis>
        </HighchartsChart>

        <div>
          {!liveUpdate && (
            <button className="btn btn-success" onClick={this.handleStartLiveUpdate}>Live update</button>
          )}
          {liveUpdate && (
            <button className="btn btn-danger" onClick={this.handleStopLiveUpdate}>Stop update</button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        basketData: state.quotes.basketData[props.basket]
    };
}

const mapActionToProps = (dispatch) =>{
    return {
      loadBasket,
      startBasketStream
    };
}

export default connect(
    mapStateToProps,
    {
      loadBasket,
      startBasketStream
    }
  )(withHighcharts(LiveChart2, Highcharts));
