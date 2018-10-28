
import React, {Component } from 'react';
import {connect} from 'react-redux';
// SparkLines is the parents
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';
class WeatherList extends Component {
    
    //render a single city, city row
    renderWeather(cityData){

        //implement const for DRY principle
        const name = cityData.city.name;
        const temp = _.map(cityData.list.map(weather => weather.main.temp), (temp) => ((temp - 273.15) * 9/5 + 32))
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const {lon , lat} = cityData.city.coord; // destructoring lon and lat
        return(
            // have to assign a key
            <tr key = {name}>
                    <td><GoogleMap lon = {lon} lat = {lat}/></td>
                    <td><Chart data = {temp} color= "blue" unit = "˚F"/></td>
                    <td><Chart data = {pressures} color = "red" unit = "hPa"/></td>
                    <td><Chart data = {humidity} color = "gray" unit = "%"/></td>
            </tr>
        )
    }

    render(){
        return(
            <table className = "table table-hover">
            <thead>
                <tr>
                    <th>City</th>    
                    <th>Temperature (˚F)</th>    
                    <th>Pressure (hPa)</th>    
                    <th>Humidity (%)</th>    
                    </tr>

                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps({weather}){
    // when we have key and value as same name we can just shrink it to 1 name (ES6 syntax)
    return {
        weather
    }
}
export default connect(mapStateToProps)(WeatherList);