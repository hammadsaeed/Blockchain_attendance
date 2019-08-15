import React, {Component} from 'react';
import {Bar, Line,Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
     itemss:props.itemss
    }
  }

  static defaultProps = {
    displayTitle:false,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.itemss}
          options={{
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
