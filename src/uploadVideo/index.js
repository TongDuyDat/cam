import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { VideoCameraOutlined } from '@ant-design/icons';
import { Card, Space, Row, Col, Image, Progress } from 'antd';
import { useDropzone } from 'react-dropzone';
import Chart from './chart';

const UploadFile = (props) => {
  const [files, setFiles] = useState([]);
  const [isDrag, setIsDrag] = useState(false)
  const [percent, setPercent] = useState(0);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    setIsDrag(true)
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
      'video/mov': []
    }
  });

  const dropzoneStyles = useMemo(
    () => ({
      // width: '70vw',
      maxWidth:'70vw',
      minWidth:'50vw',
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

  // Request to backend 
  // const customRequest = async ({ file, onSuccess, onError }) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', file);

  //     const response = await fetch('/upload-video-endpoint', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Upload failed');
  //     }

  //     const data = await response.json();
  //     onSuccess(data, file);
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     onError(error);
  //   }
  // };

  const increase = () => {
    setPercent((percent) => {
      const newPercent = percent + 1;
      if (newPercent > 70) {
        return 70;
      }
      return newPercent;
    });
  };
  useEffect(() => {
    const interval = setInterval(increase, 100)
    return () => {
      clearInterval(interval);
    };
  }, [])

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
                <em>(Only *.mp4, *.mov videos will be accepted)</em>
              </Col>
            </Row>
          </div>
          {isDrag ? <Progress percent={percent} style={{ maxWidth:'70vw', minWidth:'50vw' }} /> : null}
        </Space>
        {isDrag ?
          <Space size="small" direction="vertical" align='center'>
            <Row>
              <Col span={12} style={{ display: 'grid', alignItems: 'center' }}>
                {files.map((file) =>
                (
                  <>
                  <h2>Before</h2>
                  <video key={file.name} controls width="100%" height="70%" style={{ paddingRight: '5%' }} >
                    <source src={URL.createObjectURL(file)} type={file.type} />
                  </video>
                  </>
                ))}
              </Col>
              <Col span={12} style={{ display: 'grid', alignItems: 'center' }}>
                {files.map((file) =>
                (
                  <>
                  <h2>After</h2>
                  <video controls width="100%" height="70%" >
                    <source src={URL.createObjectURL(file)} />
                  </video>
                  </>
                ))}
              </Col>
            </Row>
            <Row>
              <div style={{ width: '40%' }}>
                <Chart />
              </div>
            </Row>
          </Space>
          :
          null
        }

      </Card>
    </>
  )
}
export default UploadFile;