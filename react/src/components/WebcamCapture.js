import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
// import base64Img from 'base64-img';
import Cloud from 'cloudinary';


class WebcamCapture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenshot: null,
            imgUrl: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.ocr = this.ocr.bind(this);
        // this.convert64ToImg = this.convert64ToImg.bind(this);
    };

    ocr(photo) {
      console.log('ocr has awoken!', photo);
    //   console.log(`ocr() here: ${this.state.screenshot}`);
      const apiKey = "cfb3a32bd888957";
    //   const photoUrl = "http://i.imgur.com/wgXuL7s.jpg"; //hard code for testing, this will be the screenshot data URL from WebcamCapture

      axios.get(`https://api.ocr.space/parse/imageurl?apikey=${apiKey}&url=${photo}`)
        .then((res) => {
            // console.log(res);
            let upcFromPhoto = res.data.ParsedResults[0].ParsedText;
            console.log(`yay! from pic: ${upcFromPhoto}`);
        })

    }
    handleClick(event) {
        event.preventDefault();
        const screenshot = this.webcam.getScreenshot()
        this.setState({
            screenshot
        })

        // console.log(`handleClick() here: ${this.state.screenshot}`);
        // base64Img.img(`${screenshot}`, '', 'screenshot', function(err, filepath) {});

        let convert64ToImg = (photo64) => {
            let innerThis = this;
            // base64Img.img(`${screenshot}`, '', 'screenshot', function(err, filepath) {});
            Cloud.config({
                cloud_name: "dlhmylaz8",
                api_key: "524257979483418",
                api_secret: "T4Om9-7dWkG9YWplUDMtEbEHu6M",
            })
            Cloud.uploader.upload(photo64, function(result, err) {
                
                if (result) {
                    console.log("result", result.url);
                    var imgUrl = result.url;
                    innerThis.ocr(imgUrl);
                            // innerThis.setState({
                            //     imgUrl
                            // })
                } else {
                    console.log(`err: ${err}`);
                }
            });
        }
        // this.ocr(this.state.imgUrl);
        convert64ToImg(screenshot);
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
                {this.state.screenshot ? <img src={this.state.screenshot} alt="webcam" /> : null}
            </div>
            </div>
        </div>
            );
      }
};

export default WebcamCapture;