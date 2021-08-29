import GoogleMapReact from "google-map-react"
import React from "react";
import ReactDOM from "react-dom"
import { connect } from "react-redux";
import { CurrentDay } from "../../../../types/CurrentDayWeather";
import { ReduxStore } from "../../../../types/ReduxStore";

const mapStateToProps = (state:ReduxStore) => ({
    currentDay: state.currentDay.weatherObj
})

interface GoogleMapProps{
    currentDay: CurrentDay | null
    center:{
        lat:number
        lng:number
    }
    zoom:number
}

interface AnyProps{
    text:string
    lat:number
    lng:number
}


const AnyReactComponent = ({text}:AnyProps) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );
  
   class GoogleMap extends React.Component<GoogleMapProps> {
    static defaultProps = {
      center: {
          lat: 59.95, 
          lng: 30.33
        },
      zoom: 11
    };
  
    render() {
      return (
         <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent 
            lat={this.props.currentDay?.coord.lat!} 
            lng={this.props.currentDay?.coord.lon!} 
            text='Kreyser Avrora' 
          />
        </GoogleMapReact>
      );
    }
  }

  export default connect(mapStateToProps)(GoogleMap);
  
 /*  ReactDOM.render(
    <div style={{width: '100%', height: '400px'}}>
      <SimpleMap/>
    </div>,
    document.getElementById('main')
  ); */
  