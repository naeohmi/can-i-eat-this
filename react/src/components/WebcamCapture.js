import React, { Component } from 'react';
import Webcam from 'react-webcam';

class WebcamCapture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedPhoto: undefined,
        }
        this.handlePhoto = this.handlePhoto.bind(this);
        this.setState = this.setState.bind(this);
    };

    handlePhoto(event) {
        event.preventDefault();
        this.setState(event);
        // this.refs.photo.value = "";
    }
    
    setState(photo) {
        const savedPhoto = this.photo.getScreenshot();

        this.setState({
            savedPhoto: savedPhoto,
        })
    };
    
    render() {
        return (
            <div className="container">
                <div className="webcam">
                    <Webcam
                        audio={false}
                        height={350}
                        ref="photo"
                        screenshotFormat="image/jpeg"
                        width={350}
                    />
                    <button className="searchProduct" onClick={this.setState}>Capture photo</button>
                </div>

            <div className="sceenshot">
                {this.state.photo ? <img src={this.state.photo} /> : null}
            
            </div>
        </div>
            );
      }
};

export default WebcamCapture;