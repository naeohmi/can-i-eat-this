import React, { Component } from 'react';
import Webcam from 'react-webcam';

class WebcamCapture extends Component {
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
        photo.preventDefault();
        console.log('setState awoke!')
        console.log(photo);
        const savedPhoto = this.photo.getScreenshot();
        console.log(savedPhoto);

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
                        height={400}
                        ref="photo"
                        screenshotFormat="image/jpeg"
                        width={400}
                    />
                    <br/>
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