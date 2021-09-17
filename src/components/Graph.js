

import React, { Component } from "react";
import Highcharts from "highcharts";
import axios from 'axios';
const ReactHighcharts = require("react-highcharts");
require("highcharts/modules/data.js")(Highcharts)
require("highcharts/modules/exporting.js")(Highcharts)
require("highcharts/modules/export-data.js")(Highcharts)
require("highcharts/modules/accessibility.js")(Highcharts)

var sunday_array=[];


 
class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: [],
            data2: [],
            colorcode: '#6AF9C4'
        };

    }

    componentDidMount() {
    
       
    

    
            axios.get(`https://demo-live-data.highcharts.com/aapl-ohlcv.json`)
                .then(res => {
                    var data = res.data;
                    data = data.map((item) => {
                        
                        return [item[0], item[1] * 100]
                    })
                    // data.map((item)=>{
                    //     let temp=item[0]+604800000;
                    //     sunday_array.push(temp);
                    // })
                    

                    data.map((item)=>
                    {
                        if(new Date(item[0]).getDay()==1)
                        {
                               sunday_array.push([item[0],item[1]]);
                        }
                        else{
                            sunday_array.push([item[0],0]);
                        }
                    })


                    const chart_data = {
                        chart: {
                            zoomType: 'x',
                            
                        },
                        title: {
                            text: 'Demo Chart'
                        },
                        rangeSelector: {
                            allButtonsEnabled: true,
                        },
                        tooltip: {
                            valueDecimals: 2
                        },

                        subtitle: {
                            text: document.ontouchstart === undefined ?
                                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                        },
                        xAxis: {
                            type: 'datetime',
                        },
                        yAxis: {
                            title: {
                                text: 'Exchange rate'
                            }
                        },
                        legend: {
                            enabled: true
                        },


                        series: [{
                            type: 'area',
                            name: 'USD to EUR',
                            data: data,
                            color: '#5664d2'
                        },
                        
                        ]
                    }
                    console.log(chart_data)
                    console.log(sunday_array)
                    this.setState({ config: chart_data });    
                
                });
       
    }
    
    
    render() {
        return (
            <div id="container">
                <ReactHighcharts config={this.state.config} />
            </div>
        );
    }
}

export default Graph;


