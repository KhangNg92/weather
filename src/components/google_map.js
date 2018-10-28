import React, {Component} from 'react';

//
class GoogleMap extends Component{
    componentDidMount(){
        // google maps will find the this.refs.map which is the html component
        // then put the map in
        const google = window.google; 
        new google.maps.Map(this.refs.map, {
            zoom: 12, // zoom level, good glance of a city
            center: { // center the property
                lat: this.props.lat, // latitude
                lng: this.props.lon // longitude
            }
        })
    }

    render(){
        //ref system is reference to this.refs.map
        return <div ref= "map"/>
    }

}

export default GoogleMap;