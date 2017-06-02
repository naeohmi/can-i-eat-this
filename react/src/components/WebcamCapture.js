import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
// import base64Img from 'base64-img';
import Cloud from 'cloudinary';
window.data = ""
 
class WebcamCapture extends Component {
   constructor(props) {
       super(props);
       this.state = {
           screenshot: null,
           imgUrl: null,
           upcFromPhoto: undefined
       }
       this.ocr = this.ocr.bind(this);
       this.handleClick = this.handleClick.bind(this);
       this.afterPhoto = this.afterPhoto.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   };
   //axios call to conduct the OCR - optical character recognition from the photo user took
   ocr(photo) {
     console.log('ocr has awoken!', photo);
   //   console.log(`ocr() here: ${this.state.screenshot}`);
     const apiKey = "cfb3a32bd888957";
    //  const photoUrl = "http://i.imgur.com/wgXuL7s.jpg"; //hard code for testing, this will be the screenshot data URL from WebcamCapture
 
     axios.get(`https://api.ocr.space/parse/imageurl?apikey=${apiKey}&url=${photo}`)
       .then((res) => {
           // console.log(res);
           //grabs just the text from the OCR JSON response returned
           let upcFromPhoto = res.data.ParsedResults[0].ParsedText;
           console.log(`yay! from pic: ${upcFromPhoto}`);
           //ensures there actually is data returned
           if(upcFromPhoto){
               return upcFromPhoto
            }
           })
           //sets the state with the barcode from photo
           .then(data => {
               this.setState({
                   upcFromPhoto: data
           })
           //added this so I could test in the window the data response
               window.data = data;
           })
   }
   //grabs the image from the webcam after user clicks button
   handleClick(event) {
       event.preventDefault();
       const screenshot = this.webcam.getScreenshot();
       //sets state with image
       this.setState({
           screenshot
       })
 
       // base64Img.img(`${screenshot}`, '', 'screenshot', function(err, filepath) {});
      
       //saves the webcam screenshot from the user into the cloudinary cloud and assigns a unique URL
       let convert64ToImg = (photo64) => {
           //because this is a method within a function, I needed to save the 'this' that I wanted
           let innerThis = this;
           // base64Img.img(`${screenshot}`, '', 'screenshot', function(err, filepath) {});
           //cloudinary header from naeohmi profile
           Cloud.config({
               cloud_name: "dlhmylaz8",
               api_key: "524257979483418",
               api_secret: "T4Om9-7dWkG9YWplUDMtEbEHu6M",
           })
        //    //cloudinary header from heroku profile
        //    Cloud.config({
        //        cloud_name: "hknybtv4v",
        //        api_key: "412636665797488",
        //        api_secret: "SfCXpbKH1RMdmpXl0XTxXgn-LrE",
        //    })
           //uploads photo user took to cloudinary
           Cloud.uploader.upload(photo64, function(result, err) {
               //grabs the photos new unique URL from cloudinary
               console.log('cloudinary up');
               
               if (result) {
                   console.log("result", result.url);
                   var imgUrl = result.url;
                   //assigns URL to state
                   innerThis.ocr(imgUrl);
                           innerThis.setState({ //yay inner this! :)
                               imgUrl
                           })
               } else {
                   console.log(`err: ${err}`);
               }
           });
       }
       // this.ocr(this.state.imgUrl);
       convert64ToImg(screenshot);
   }
   //form where user can update the barcode, needed to add this state change
   handleChange(event) {
       let info = event.target.value
       this.setState({
           upcFromPhoto: info
       })
   }
   //user edit barcode from photo state change on submit
   handleSubmit(event) {
       event.preventDefault();
       this.setState({
           upcFromPhoto: event.target.value
       })
   }
   //after user takes photo, conduct the OCR and show user the barcode number to double check that its correct before grabbing product info
   afterPhoto() {
       if (this.state.upcFromPhoto) {
           return (
               <div className="div-check-upc">
                   <label>Is this number correct?</label>
                   <form onSubmit={this.handleSubmit}>
                       <input
                           type="text"
                           defaultValue={this.state.upcFromPhoto}
                           ref="check-upc"
                           onChange={(e) => this.handleChange(e)}
                           />
                       <input
                           className="check-upc-from-photo"
                           type="submit"
                           value="submit"
                           />
                       </form>
                   </div>
           )
       }
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
               {this.afterPhoto()}
           </div>
       </div>
       </div>
           );
     }
  };
 
export default WebcamCapture;