import { Card, Col, Row } from "antd";
import React from "react";
import WebcamScreen from "../Webcam";
// import Chart from "../uploadVideo/chart";
import FakeChart from "./fakeChart";
import Webcam from 'react-webcam'


const Live = () => {
  const webcam = React.useRef(null);

  return (
    <Card title='Live Cam'>
      {/* <video> */}
      <Row gutter={8}>
        <Col span={12}>
          <WebcamScreen />
        </Col>
        <Col span={12}>
          <Row>
            <FakeChart />
          </Row>
        </Col>
      </Row>
      {/* </video> */}
    </Card >
  )
}
export default Live;