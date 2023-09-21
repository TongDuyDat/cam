import { Badge, Card, Col, Popover, Row, Tooltip } from 'antd';
import React, { useState } from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, LabelSeries, Hint } from 'react-vis';

function Chart(props) {
  // Sample data for the bar chart
  const [text, setText] = useState({ label: null, value: null });
  // const data = [
  //   { x: 'Label 1', y: 12 },
  //   { x: 'Label 2', y: 20 },
  //   { x: 'Label 3', y: 3 },
  //   { x: 'Label 4', y: 8 },
  //   { x: 'Label 5', y: 2.6 },
  // ];
  const { data, time } = props
  const formattedData = Object.entries(data).map(([key, value]) => ({
    x: key.charAt(0).toUpperCase() + key.slice(1),
    y: parseFloat(value.toFixed(1)), // Round to one decimal place
  }));
  // console.log(time/60);
  return (
      
        <Popover content={text.label + ': ' + text.value}>
          <XYPlot width={800} height={400} xType="ordinal">
            <XAxis />
            <YAxis />
            <VerticalBarSeries
              data={formattedData}
              barWidth={0.5} // Set the width of the bars
              cluster={false} // Disable clustering, use stacking
              color="#3498db" // Set the color of the bars
              opacity={0.8} // Set the opacity of the bars
              onValueMouseOver={(datapoint, event) => setText({ label: datapoint.x, value: datapoint.y })} // Handle click events
              stroke={true} // Outline the bars
              style={{ fill: '#3498db', stroke: '#2980b9', strokeWidth: 2 }} // Apply custom styling
              animation={{ duration: 500, easing: 'ease-out' }} // Add animations
              stacked={true} // Use stacked bars
              baseLine={0} // Set the baseline value for stacking
              barPadding={0.2} // Adjust bar padding for clustered bars
              className="custom-bars" // Apply a custom CSS class
            />
          </XYPlot>
        </Popover>
    
  );
}

export default Chart;
