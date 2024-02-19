// import React from 'react';

// const UplaodImagesData = ({
//   dropzoneStyle,
//   getRootProps,
//   getInputProps,
//   pdfFile,
//   PdfComponent,
//   imageSrc,
//   imageSize,
//   handleImageLoaded,
//   handleImageResize,
//   videoSrc,
//   file,
//   error
// }) => {
//   return (
//     <div className="mt-4 cursor-pointer text-blue-600">
//       <div
//         {...getRootProps({ className: "dropzone" })}
//         style={dropzoneStyle}
//       >
//         <input {...getInputProps()} />
//         <p className="mb-[-1px] text-center">
//           Upload PDF, Images and Videos
//         </p>
//       </div>

//       <div className='flex flex-row justify-between'>
//         <div>
//           {pdfFile && <PdfComponent pdfFile={pdfFile} />}
//         </div>

//         <div>
//           {imageSrc && (
//             <div className="mt-2 mb-4">
//               <img
//                 src={imageSrc}
//                 alt="Uploaded"
//                 className="img-fluid"
//                 style={{
//                   width: `${imageSize.width}px`,
//                   height: `${imageSize.height}px`,
//                 }}
//                 onLoad={handleImageLoaded}
//               />
//               <div className="mb-2">
//                 <label>Width: </label>
//                 <input
//                   className="border border-gray-500"
//                   type="number"
//                   name="width"
//                   value={imageSize.width}
//                   onChange={handleImageResize}
//                 />
//               </div>
//               <div className="mb-2">
//                 <label>Height: </label>
//                 <input
//                   className="border border-gray-500"
//                   type="number"
//                   name="height"
//                   value={imageSize.height}
//                   onChange={handleImageResize}
//                 />
//               </div>
//             </div>
//           )}

//         </div>
//         <div>
//           {videoSrc && (
//             <video
//               controls
//               src={videoSrc}
//               className="video-fluid"
//             />
//           )}

//           {file && (
//             <div>
//               <h4>File Details:</h4>
//               <p>Name: {file.name}</p>
//               <p>Size: {file.size} bytes</p>
//               <p>Type: {file.type}</p>
//             </div>
//           )}
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UplaodImagesData;
