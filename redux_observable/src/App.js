import React from 'react';
import logo from './logo.svg';
import store from './store/store';
import StreamData from './components/StreamData';
import LiveChart from './components/LiveChart';
import LiveChart2 from './components/LiveChart2';
import { Provider } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      basket:"TLT"
    }
  }

  handleChange = event => {
    this.setState({
      basket: event.target.value
    });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <InputLabel id="demo-simple-select-label">Basket</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.basket}
                onChange={this.handleChange}
              >
              <MenuItem  value="" />
              <MenuItem  value="TLT">TLT</MenuItem >
              <MenuItem  value="LQD">LQD</MenuItem >
              <MenuItem  value="SHE">SHE</MenuItem >
              <MenuItem  value="PQRD">PQRD</MenuItem >
            </Select>
          </div>
          {/* <StreamData /> */}
          {/* <LiveChart basket={this.state.basket}/> */}
          <LiveChart2 basket={this.state.basket}/>
        </div>
      </Provider>
    );
  }
}
export default App;
