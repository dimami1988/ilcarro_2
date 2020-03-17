

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY, language: 'en', }}
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY, language: 'en', }}
                    /*process.env.GOOGLE_MAPS_API, language: 'en'*/
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
export default SimpleMap;


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