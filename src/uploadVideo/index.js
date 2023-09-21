import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import { VideoCameraOutlined } from '@ant-design/icons';
import { Card, Space, Row, Col, Image, Progress } from 'antd';
import { useDropzone } from 'react-dropzone';
import Chart from './chart';
import axios from 'axios';

const UploadFile = (props) => {
  const [files, setFiles] = useState([]);
  const [isDrag, setIsDrag] = useState(false)
  const [percent, setPercent] = useState(0);
  const [response, setResponse] = useState(false)
  const [delay, setDelay] = useState(5000)
  const [data, setData] = useState({})
  const [link, setLink] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    setFiles(acceptedFiles);
    setIsDrag(true)
    setResponse(false)

    const videoFile = acceptedFiles[0]; // Assuming a single file is dropped

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('file', videoFile);

    try {
      // Send the file to the backend endpoint
      const response = await axios.post('https://65ef-171-234-162-60.ngrok-free.app/upload_video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      if (response) {
        setResponse(true)
        // setPercent(percent + 30)
        setLink(response.data.res_file)
        setData(response.data.char)
        setDelay(100)
        setPercent(0)
        console.log('File uploaded successfully:', response.data);
      }
    } catch (error) {
      // Handle errors
      console.error('Error uploading file:', error);
    }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    onDrop,
    accept: {
      'video/mp4': [],
      // 'video/mov': []
    }
  });

  const dropzoneStyles = useMemo(
    () => ({
      // width: '70vw',
      maxWidth: '70vw',
      minWidth: '50vw',
      height: 100,
      border: isDragActive
        ? isDragAccept
          ? '1px solid #00e676' // Green border for accepted files
          : '1px solid #ff1744' // Red border for rejected files
        : '2px dashed #ccc', // Default dashed border
      backgroundColor: isDragActive ? 'rgba(0, 230, 118, 0.1)' : 'white',
    }),
    [isDragActive, isDragAccept]
  );

  const increase = () => {
    if(percent < 100){
      setPercent(percent + 1)
    }
    // else if(percent < 100 && response == true){
    //   setPercent(percent + 1)
    // }
  };
  useEffect(() => {
    const interval = setInterval(increase, delay)
    return () => {
      clearInterval(interval);
    };
  }, [percent, response])
  return (
    <>
      <Card title="Upload Video">
        <Space size="small" direction="vertical" style={{ paddingTop: 20, paddingBottom: 20, width: 500 }}>
          <div
            {...getRootProps()}
            style={dropzoneStyles}
            className="dropzone"
          >
            <input {...getInputProps()} />
            <Row gutter={16}>
              <Col span={8}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingTop: 20 }}>
                  <VideoCameraOutlined style={{ fontSize: '30px' }} />
                </div>
              </Col>
              <Col span={16}>
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(Only *.mp4 videos will be accepted)</em>
              </Col>
            </Row>
          </div>
          {isDrag ? <Progress percent={percent} style={{ maxWidth: '70vw', minWidth: '50vw' }} /> : null}
        </Space>
        {isDrag ?
          <Row>
            <Col span={12} style={{ display: 'grid', alignItems: 'center' }}>
              {files.map((file) =>
              (
                <>
                  <h2>Video video lớp học</h2>
                  <video key={file.name} controls width="100%" height="70%" style={{ paddingRight: '5%' }} >
                    <source src={URL.createObjectURL(file)} type={file.type} />
                  </video>
                </>
              ))}
            </Col>
            {response ?
              <Col span={12} style={{ display: 'grid', alignItems: 'center' }}>
                {files.map((file) =>
                (
                  <>
                    <h2>Video được tích hợp công nghệ AI</h2>
                    <video key={1} controls width="100%" height="70%" >
                      <source src={link} />
                    </video>
                  </>
                ))}
              </Col> : null
            }
          </Row>
          : null
        }
        {response ? 
        <Row>
          <h2>Thời gian giáo viên trong lớp: {parseFloat(data.time_teach_in_class.toFixed(1))}s</h2>
          <div style={{ width: '100%' }}>
            <Chart data={data.char} time={data.time_teach_in_class}/>
          </div>
        </Row>
          : null
        }
      </Card>
    </>
  )
}
export default UploadFile;