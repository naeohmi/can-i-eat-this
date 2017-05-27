import React, { Component } from 'react';
import Webcam from 'react-webcam';

class WebcamCapture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenshot: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.setState = this.setState.bind(this);
    };

    handleClick(event) {
        event.preventDefault();
        const screenshot = this.webcam.getScreenshot();
        this.setState({
            screenshot
        })
    }
    
    // setState(photo) {
    //     photo.preventDefault();
    //     console.log('setState awoke!')
    //     console.log(photo);
    //     const savedPhoto = this.photo.getScreenshot();
    //     console.log(savedPhoto);

    // };
    
    render() {
        return (
            <div className="container">
                <div className="webcam">
                    <Webcam
                        audio={false}
                        height={400}
                        ref={node => this.webcam = node}
                        screenshotFormat="image/jpeg"
                        width={400}
                    />
                    <br/>
                    <button className="searchProduct" onClick={this.handleClick}>Capture photo</button>
                </div>

            <div className="sceenshot">
                {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
            </div>
        </div>
            );
      }
};

export default WebcamCapture;
