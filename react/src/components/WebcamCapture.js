import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';


class WebcamCapture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenshot: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.ocr = this.ocr.bind(this);
    };

    handleClick(event) {
        event.preventDefault();
<<<<<<< HEAD
        const screenshot = this.webcam.getScreenshot()
        // this.setState({
        //     screenshot
        // })
            console.log(`after handleclick ${screenshot}`);

        // if (this.state.screenshot != null) {
        //     console.log(`after handleclick ${screenshot}`);
        //     this.ocr(screenshot);
        // } else {
        //     console.log('nah');
        // }

        // console.log(`handleClick() here: ${this.state.screenshot}`);
        this.ocr(screenshot);

        // setTimeout(function() {
        //     this.setState({screenshot: 1})
        //     }.bind(this), 3000);

=======
        const screenshot = this.webcam.getScreenshot();
        this.setState({
            screenshot
        })
        console.log(<img alt="barcode" src="this.state.screenshot" />);
>>>>>>> 002816a9e55208e8c779b847159a8d0341d42a9d
    }

    

    ocr(photo) {
      console.log('ocr has awoken!');
    //   console.log(`ocr() here: ${this.state.screenshot}`);
      const apiKey = "cfb3a32bd888957";
    //   const photoUrl = "http://i.imgur.com/wgXuL7s.jpg"; //hard code for testing, this will be the screenshot data URL from WebcamCapture

      axios.post(`https://api.ocr.space/parse/imageurl?apikey=${apiKey}&url=${photo}`)
        .then((res) => {
            // console.log(res);
            let upcFromPhoto = res.data.ParsedResults[0].ParsedText;
            console.log(`yay! from pic: ${upcFromPhoto}`);
        })

    }

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

            <div className="sceenshot">
                {this.state.photo ? <img src={this.state.photo} alt="webcam" /> : null}
            </div>
            </div>
        </div>
            );
      }
};

export default WebcamCapture;