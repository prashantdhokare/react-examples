import React from "react";
import PropTypes from 'prop-types';
import {fetchStreamData} from '../actions';
import { Observable} from 'rxjs/';
import { DOM } from 'rx-dom';
import { connect } from 'react-redux';

class StreamData extends React.Component{

  constructor(props) {
    super(props);
    this.setData("http://192.168.0.102:8080/comment/stream")
    props.fetchStreamData();
  }

  setData(URL) {
    var observer = Observable.create(function (e) {
      console.log('Opening');
    });
    var source = DOM.fromEventSource(URL);
    source.subscribe(function (e) {
      console.log('Received data: ' + e);
    });
  }

  render() {
    return (
      <div>
        Hii Stream
      </div>
    );
  }
}

StreamData.propTypes = {
    fetchStreamData: PropTypes.func.isRequired
}
export default connect(
  null,
  {fetchStreamData}
)(StreamData);