

import React, { Component } from "react";
import Highcharts from "highcharts";
import axios from 'axios';
const ReactHighcharts = require("react-highcharts");
require("highcharts/modules/data.js")(Highcharts)
require("highcharts/modules/exporting.js")(Highcharts)
require("highcharts/modules/export-data.js")(Highcharts)
require("highcharts/modules/accessibility.js")(Highcharts)

var sunday_array=[];


 
class Piechart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: [],
            
        };

    }

    componentDidMount() {


                    const chart_data = {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'User By Category'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'User By Category',
                            colorByPoint: true,
                            data: [ {
                                name: 'Male',
                                y: 6,
                                color:'#fb8c00'
                            }, {
                                name: 'Female',
                                y: 3,
                                color:'#5664d2'
                            }, {
                                name: 'others',
                                y: 1,
                                color:'#999999'
                            }]
                        }]
                    }
                    console.log(chart_data)
                    console.log(sunday_array)
                    this.setState({ config: chart_data });    
                
            
       
    }
    
    
    render() {
        return (
            <div id="container">
                <ReactHighcharts config={this.state.config} />
            </div>
        );
    }
}

export default Piechart;


