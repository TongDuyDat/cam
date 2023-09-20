import { Card, Col, Row } from "antd";
import React from "react";
import WebcamScreen from "../Webcam";
import Chart from "../uploadVideo/chart";
import Webcam from 'react-webcam'


const Live = () => {
  const webcam = React.useRef(null);

  return (
    <Card title='Live Cam'>
      {/* <video> */}
      <Row gutter={8}>
        <Col span={12}>
          {/* <WebcamScreen /> */}
          <iframe
            width="100%"
            height="100%"
            auto
            src="https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            sandbox='allow-scripts allow-same-origin' // Security sandbox options
            allow='accelerometer;  encrypted-media; gyroscope; picture-in-picture' // Allow specific features
            allowfullscreen
          ></iframe>
        </Col>
        <Col span={12}>
          <Row gutter={8}>
            <Col span={6}>
              <iframe
                width="100%"
                height="100%"
                auto
                src="https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                sandbox='allow-scripts allow-same-origin' // Security sandbox options
                allow='accelerometer;  encrypted-media; gyroscope; picture-in-picture' // Allow specific features
                allowfullscreen
              ></iframe>
            </Col>
            <Col span={6}>
              <iframe
                width="100%"
                height="100%"
                auto
                src="https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                sandbox='allow-scripts allow-same-origin' // Security sandbox options
                allow='accelerometer;  encrypted-media; gyroscope; picture-in-picture' // Allow specific features
                allowfullscreen
              ></iframe>
            </Col>
            <Col span={6}>
              <iframe
                width="100%"
                height="100%"
                auto
                src="https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                sandbox='allow-scripts allow-same-origin' // Security sandbox options
                allow='accelerometer;  encrypted-media; gyroscope; picture-in-picture' // Allow specific features
                allowfullscreen
              ></iframe>
            </Col>
            <Col span={6}>
              <iframe
                width="100%"
                height="100%"
                auto
                src="https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                sandbox='allow-scripts allow-same-origin' // Security sandbox options
                allow='accelerometer;  encrypted-media; gyroscope; picture-in-picture' // Allow specific features
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Chart />
          </Row>
        </Col>
      </Row>
      {/* </video> */}
    </Card >
  )
}
export default Live;