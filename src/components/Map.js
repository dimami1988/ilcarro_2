import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";

export class MapContainer extends React.Component {
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: {name:"Ashkelon"},
            activeMarker: marker,
            showingInfoWindow: true
        });

    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow >
                    <div>
                        {/*<h1>{this.state.selectedPlace.name}</h1>*/}
                        <h1>"Ashkelon"</h1>
                    </div>

                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDeWdJzrBujugGQxR4bnP-UeVIV9LCeWwA")
})(MapContainer)


// function Map() {
//     return (
//             <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.890282327417!2d34.56592869456078!3d31.677981352185764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029c5141685e73%3A0xeb72211d3092dc0f!2z0JDRiNC60LXQu9C-0L0!5e0!3m2!1sru!2sil!4v1584191710075!5m2!1sru!2sil"
//                 width="400" height="300" frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false"
//                 tabIndex="0"></iframe>
//     );
// }
//
// export default Map;