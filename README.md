# Object Detection App
This is an object detection app made using TensorFlow COCO SSD and ReactJS. It can detect objects in real time from the webcam.

Requirements
Node.js
ReactJS
TensorFlow
COCO SSD model
Installation
Clone the repository
Install the dependencies
npm install


## Running the app

### 1. Start the ReactJS server
npm start


### 2. Open the app in your browser
http://localhost:3000

# How it works
The app uses the TensorFlow COCO SSD model to detect objects in real time. The model is pre-trained on the COCO dataset, which contains over 200,000 images of objects from 80 different categories.

When the app is started, it loads the TensorFlow model and initializes the ReactJS server. The ReactJS server renders the app's UI, which includes a live preview of the webcam feed.

The app continuously captures frames from the webcam and sends them to the TensorFlow model for inference. The model then returns a list of bounding boxes and classes for each object detected in the frame.

The ReactJS server then renders the bounding boxes and classes on the app's UI.


I hope this is helpful!

## ScreenShots 🔽
<p align="center">
  <img src = "https://github.com/harshvardhansb/ObjectDetection/blob/master/ss/ss1.jpg" width = 100%>
  <img src = "https://github.com/harshvardhansb/ObjectDetection/blob/master/ss/ss2.jpg" width = 100%>
  <img src = "https://github.com/harshvardhansb/ObjectDetection/blob/master/ss/ss3.jpg" width = 100%>
</p>
