import React, { useState } from 'react';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import { CompactPicker } from 'react-color';
import Header from '../../AdminDashboard/Header';
import {Col} from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';   


const DrawingApp = () => {
    const [description, setDescription] = useState('');
  const [lines, setLines] = useState([]);
  const [tool, setTool] = useState('pen');
  const [plateColor, setPlateColor] = useState('#fff');
  const [selectedColor, setSelectedColor] = useState('#000000');
  
    const handleColorChange1 = (color) => {
      setSelectedColor(color.hex);
      //
    };
    const handleEditorChange = (editorState) => {
        // const rawContentState = convertToRaw(editorState.getCurrentContent());
        // setDescription(JSON.stringify(rawContentState));
      };
    const handleButtonClick = (tool) => {
     
      console.log(`Button ${tool} clicked`);
    };
  
  const handleMouseDown = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, color: plateColor, points: [x, y] }]);
  };

  const handleMouseMove = (e) => {
    if (lines.length === 0) return;

    const newLines = lines.slice();
    const lastLine = newLines[newLines.length - 1];
    const { x, y } = e.target.getStage().getPointerPosition();

    lastLine.points = lastLine.points.concat([x, y]);
    setLines(newLines);
  };

  const handleToolChange = (newTool) => {
    setTool(newTool);
  };

  const handleColorChange = (newColor) => {
    setPlateColor(newColor);
  };

  const colorPalette = ['#000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  return (
    <div>
    <Header/>
      {/* <div>
        <label>Plate Color:</label>
        <input
          type="color"
          value={plateColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      <div>
        <label>Tool:</label>
        <select value={tool} onChange={(e) => handleToolChange(e.target.value)}>
          <option value="pen">Pen</option>
          <option value="eraser">Eraser</option>
        </select>
      </div>
      <div>
        <label>Color Palette:</label>
        {colorPalette.map((color, index) => (
          <span
            key={index}
            onClick={() => handleColorChange(color)}
            style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              backgroundColor: color,
              cursor: 'pointer',
              margin: '0 5px',
            }}
          ></span>
        ))}
      </div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <Layer>
          <Rect width={window.innerWidth} height={window.innerHeight} fill={plateColor} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.tool === 'eraser' ? '#fff' : line.color}
              strokeWidth={line.tool === 'eraser' ? 10 : 5}
              globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
            />
          ))}
        </Layer>
      </Stage> */}
      <Col xs={24} className="css-14mf4t4 mt-8" style={{ paddingLeft: '12px', paddingRight: '12px' ,marginLeft:'390px' }}>
            {/* HTML Editor */}
            <label>Description</label>
            <div className="ant-form-item css-14mf4t4  ml-[400px] w-[703px] border border-gray-500">
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={handleEditorChange}
                placeholder='enter your description'
                
              />
            </div>
          </Col>
      <div classNameName="canvas-container " style={{marginLeft:'400px',marginTop:'30px'}}>
     <canvas classNameName="lower-canvas" fill={plateColor}  width="703" height="451" style={{ border: '1px solid' }}></canvas>

      <div classNameName="fabric-tools  ml-[400px]">
        <button onClick={() => handleButtonClick('tool1')}></button>
        <button onClick={() => handleButtonClick('tool2')}></button>
       
<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon" onClick={() => handleButtonClick('tool1')}>
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
 stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
 xmlns="http://www.w3.org/2000/svg"><polyline points="5 9 2 12 5 15">
</polyline><polyline points="9 5 12 2 15 5">
</polyline><polyline points="15 19 12 22 9 19">
</polyline><polyline points="19 9 22 12 19 15">
</polyline><line x1="2" y1="12" x2="22" y2="12">
</line><line x1="12" y1="2" x2="12" y2="22">
</line></svg></span>
</button>
<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
 viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 
0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 
0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 
7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M11.434 4H4.566L4.5 
5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0
 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 
1.496h.386L11.434 4z"></path></svg>
</span></button>
<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon">
<svg stroke="currentColor" fill="currentColor" stroke-width="0"
 viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 
32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 
761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 
652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0
 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z">
</path>
</svg></span></button>
<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor"
 stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"
 xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 
8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span>
</button>
<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon">
<svg stroke="currentColor" fill="currentColor" stroke-width="0"
 viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1
.708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 
1 8z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 
ant-btn-default ant-btn-icon-only tool"><span className="ant-btn-icon"><svg stroke="currentColor" 
fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
 xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.001 14H4z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool"><span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool"><span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg></span></button>



<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" 
stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em"
 xmlns="http://www.w3.org/2000/svg"><path d="M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17
 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1 35.35 0 64-28.65
 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65
 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 
64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 
64-64 .01-35.35-28.64-64-63.99-64zm-288 8.88V151.12A63.825 63.825 0 0 0
 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1-35.35 0-64 28.65-64 
64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.748 63.748 0 0 0 96 360.88zM272 256c0-8.82 7.18-16 
16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 
16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 
16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z">
</path></svg></span></button>

<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
 viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5
 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207
 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 
5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5
 0 0 1-.468-.325z"></path></svg></span></button>

<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" 
height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13.998c-.092.065-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 
2-2.5 0-1.5-1.908-3.435-2-3.5zm-16.586-1c0 .534.208 1.036.586 1.414l5.586 5.586c.378.378.88.586 
1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.584 8.707 2.291 7.293 3.705l2.293 2.293L4
 11.584c-.378.378-.586.88-.586 1.414zM11 7.412l5.586 5.586L11 18.584h.001l-.001 1v-1l-5.586-5.586L11 7.412z">
</path></svg></span></button>

<button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" 
height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z">
</path><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3a2 2 0 002 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 00-2 2v10a2 2 0 002 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool">
<span className="ant-btn-icon">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8a2 2 0 00-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7a2 2 0 002 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12a2 2 0 002 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool"><span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool"><span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 18h3v-2H9c-1.654 0-3-1.346-3-3s1.346-3 3-3h6v3l5-4-5-4v3H9c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool"><span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></span></button><button type="button" className="ant-btn css-14mf4t4 ant-btn-default ant-btn-icon-only tool"><span className="ant-btn-icon"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></span></button>
<div></div>
      </div>

      <div classNameName="fabric-canvas-color-palette  ml-[400px]">
        <CompactPicker color={selectedColor} onChange={handleColorChange1} />
      </div>
    </div>
    </div>
  );
};

export default DrawingApp;
