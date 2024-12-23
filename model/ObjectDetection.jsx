'use client';

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/render-predictions";

// You can initialize disposalGuide as an empty object initially
let disposalGuide = {};

function ObjectDetection() {
  const [isLoading, setIsLoading] = useState(true);
  const [disposalGuideLoaded, setDisposalGuideLoaded] = useState(false);  // New state for disposal guide
  const [detectedObjects, setDetectedObjects] = useState([]);  // State to hold detected objects and their disposal info

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const detectIntervalRef = useRef(null);  // Use useRef to store detectInterval

  // Function to handle object detection and log disposal info
  function handleObjectDetection(predictions) {
    const detectedItems = predictions.map((prediction) => {
      const detectedObject = prediction.class;
      const disposalInfo = disposalGuide[detectedObject] || 'Disposal information not found';
      

     
      return {
        object: detectedObject,
        disposalInfo: disposalInfo
      };
    });

    setDetectedObjects(detectedItems); // Update state with detected objects and disposal info
  }

  // Function to run COCO-SSD and initiate object detection
  async function runCoco() {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectIntervalRef.current = setInterval(() => {
      runObjectDetection(net);
    }, 500); // Reduced detection interval to prevent excessive updates (500ms)
  }

  async function runObjectDetection(net) {
    if (canvasRef.current && webcamRef.current !== null && webcamRef.current.video?.readyState === 4) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      // Detect objects
      const detectedObjects = await net.detect(webcamRef.current.video, undefined, 0.6);

      // Render predictions on the canvas
      const context = canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context);

      // Handle the object detection and disposal info
      handleObjectDetection(detectedObjects);
    }
  }

  // Fetch the disposal guide JSON when the component mounts
  useEffect(() => {
    fetch('/disposalGuide.json')
      .then((response) => response.json())
      .then((data) => {
        disposalGuide = data;  // Store the JSON data in disposalGuide
        setDisposalGuideLoaded(true);  // Set state to indicate that disposal guide is loaded
      })
      .catch((error) => console.error('Error loading disposal guide:', error));
  }, []);  // Run this effect only on component mount

  // Start the object detection only after the disposal guide has been loaded
  useEffect(() => {
    if (disposalGuideLoaded) {
      runCoco();
    }

    return () => {
      if (detectIntervalRef.current) {
        clearInterval(detectIntervalRef.current); // Cleanup interval on component unmount
      }
    };
  }, [disposalGuideLoaded]);  // Run the detection when disposal guide is ready

  return (
    <div className="mt-8 flex flex-row justify-center items-start">
      {isLoading ? (
        <div className="gradient-text">Loading AI Model...</div>
      ) : (
        <>
          {/* Left Side: Webcam and Canvas */}
          <div className="relative flex flex-col items-center gradient p-10  rounded-md w-1/2 ">
            <Webcam
              ref={webcamRef}
              className="rounded-md lg:h-[720px]"
              muted
            />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 z-99999 lg:h-[720px]"
            />
          </div>
  
          {/* Right Side: Detected Objects and Disposal Information */}
        <div className=" border-s-violet-400 w-[500px] h-[500px] p-10">
          <div className="ml-56 flex flex-col items-start ">
            <h2 className="text-2xl font-bold mb-4 ">
              Detected Objects and Disposal Information
            </h2>
            {detectedObjects.length > 0 ? (
              <ul className="list-disc ml-64">
                {detectedObjects.map((obj, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{obj.object}:</span> {obj.disposalInfo}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No objects detected yet.</p>
            )}
          </div>
        </div>  
        </>
      )}
    </div>
  );
  
}

export default ObjectDetection;
