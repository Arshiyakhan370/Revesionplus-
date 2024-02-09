
    import React from "react";

    const  PdfComponent = ({ pdfFile }) => {
      return (
        <object
          data={pdfFile}
          type="application/pdf"
          width="100%"
          height="500px"
        >
          <p>PDF cannot be displayed. Please download it.</p>
        </object>
      );
    };
    
   
    
export default PdfComponent