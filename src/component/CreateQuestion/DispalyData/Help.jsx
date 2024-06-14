// import React, { useEffect } from "react";
// import tinymce from "tinymce";
// function Help() {
//   useEffect(() => {
//     tinymce.init({
//       selector: "textarea",
//       plugins: "tiny_mce_wiris",
//       toolbar:
//         "tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",
//       setup: function (editor) {
//         editor.ui.registry.addButton("customToolbarButton", {
//           text: "Custom Button",
//           onAction: function () {
//             // Add your custom action here
//             console.log("Custom button clicked");
//           },
//         });

//         <div
//           data-alloy-vertical-dir="toptobottom"
//           role="group"
//           class="tox-toolbar__overflow"
//           style="position: absolute; top: -461.672px; right: 365px; max-height: 1502px; overflow: hidden auto; max-width: 331px;"
//           data-alloy-placement="southwest"
//         >
//           <div
//             title=""
//             role="toolbar"
//             data-alloy-tabstop="true"
//             tabindex="-1"
//             class="tox-toolbar__group"
//           >
//             <button
//               title="Fonts"
//               aria-label="Fonts"
//               aria-haspopup="true"
//               type="button"
//               tabindex="-1"
//               unselectable="on"
//               class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
//               aria-expanded="false"
//               style="user-select: none;"
//             >
//               <span class="tox-tbtn__select-label">Arial</span>
//               <div class="tox-tbtn__select-chevron">
//                 <svg width="10" height="10" focusable="false">
//                   <path
//                     d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
//                     fill-rule="nonzero"
//                   ></path>
//                 </svg>
//               </div>
//             </button>
//             <button
//               title="Font sizes"
//               aria-label="Font sizes"
//               aria-haspopup="true"
//               type="button"
//               tabindex="-1"
//               unselectable="on"
//               class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
//               aria-expanded="false"
//               style="user-select: none;"
//             >
//               <span class="tox-tbtn__select-label">12pt</span>
//               <div class="tox-tbtn__select-chevron">
//                 <svg width="10" height="10" focusable="false">
//                   <path
//                     d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
//                     fill-rule="nonzero"
//                   ></path>
//                 </svg>
//               </div>
//             </button>
//           </div>
//           <div
//             title=""
//             role="toolbar"
//             data-alloy-tabstop="true"
//             tabindex="-1"
//             class="tox-toolbar__group"
//           >
//             <button
//               aria-label="Insert a math equation - MathType"
//               title="Insert a math equation - MathType"
//               type="button"
//               tabindex="-1"
//               class="tox-tbtn"
//               aria-disabled="false"
//             >
//               <span class="tox-icon tox-tbtn__icon-wrap">
//                 <svg
//                   width="16"
//                   height="16"
//                   version="1.1"
//                   xmlns="http://www.w3.org/2000/svg"
//                   // xmlns:xlink="http://www.w3.org/1999/xlink"
//                   x="0px"
//                   y="0px"
//                   viewBox="0 0 300 261.7"
//                   style="enable-background:new 0 0 300 261.7;"
//                   xml:space="preserve"
//                   focusable="false"
//                 >
//                   <g
//                     id="icon-wirisformula"
//                     stroke="none"
//                     stroke-width="1"
//                     fill-rule="evenodd"
//                   >
//                     <g>
//                       <path
//                         class="st1"
//                         d="M90.2,257.7c-11.4,0-21.9-6.4-27-16.7l-60-119.9c-7.5-14.9-1.4-33.1,13.5-40.5c14.9-7.5,33.1-1.4,40.5,13.5l27.3,54.7L121.1,39c5.3-15.8,22.4-24.4,38.2-19.1c15.8,5.3,24.4,22.4,19.1,38.2l-59.6,179c-3.9,11.6-14.3,19.7-26.5,20.6C91.6,257.7,90.9,257.7,90.2,257.7"
//                       ></path>
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path
//                         class="st2"
//                         d="M300,32.8c0-16.4-13.4-29.7-29.9-29.7c-2.9,0-7.2,0.8-7.2,0.8c-37.9,9.1-71.3,14-112,14c-0.3,0-0.6,0-1,0c-16.5,0-29.9,13.3-29.9,29.7c0,16.4,13.4,29.7,29.9,29.7l0,0c45.3,0,83.1-5.3,125.3-15.3h0C289.3,59.5,300,47.4,300,32.8"
//                       ></path>
//                     </g>
//                   </g>
//                 </svg>
//               </span>
//             </button>
//             <button
//               aria-label="Insert a chemistry formula - ChemType"
//               title="Insert a chemistry formula - ChemType"
//               type="button"
//               tabindex="-1"
//               class="tox-tbtn"
//               aria-disabled="false"
//             >
//               <span class="tox-icon tox-tbtn__icon-wrap">
//                 <svg
//                   width="16"
//                   height="16"
//                   version="1.1"
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlns:xlink="http://www.w3.org/1999/xlink"
//                   x="0px"
//                   y="0px"
//                   viewBox="0 0 40.3 49.5"
//                   style="enable-background:new 0 0 40.3 49.5;"
//                   xml:space="preserve"
//                   focusable="false"
//                 >
//                   <g
//                     id="icon-wirisformula"
//                     stroke="none"
//                     stroke-width="1"
//                     fill-rule="evenodd"
//                   >
//                     <g>
//                       <path
//                         class="st1"
//                         d="M39.2,12.1c0-1.9-1.1-3.6-2.7-4.4L24.5,0.9l0,0c-0.7-0.4-1.5-0.6-2.4-0.6c-0.9,0-1.7,0.2-2.4,0.6l0,0L2.3,10.8 l0,0C0.9,11.7,0,13.2,0,14.9h0v19.6h0c0,1.7,0.9,3.3,2.3,4.1l0,0l17.4,9.9l0,0c0.7,0.4,1.5,0.6,2.4,0.6c0.9,0,1.7-0.2,2.4-0.6l0,0 l12.2-6.9h0c1.5-0.8,2.6-2.5,2.6-4.3c0-2.7-2.2-4.9-4.9-4.9c-0.9,0-1.8,0.3-2.5,0.7l0,0l-9.7,5.6l-12.3-7V17.8l12.3-7l9.9,5.7l0,0 c0.7,0.4,1.5,0.6,2.4,0.6C37,17,39.2,14.8,39.2,12.1"
//                       ></path>
//                     </g>
//                   </g>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>;

//         editor.ui.registry.addButton("customToolbarButton");
//       },
//     });
//   }, []);

//   return <textarea />;
// }

// // export default TinyMCEEditor;

// export default Help;
 