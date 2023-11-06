import React, { useState } from "react";
const FirmwareFileUpload = () => {
   const [selectedFile, setSelectedFile] = useState(null);
   const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
   };

   const handleUpload = async () => {
      if (!selectedFile) {
         alert("Please first select a file");
         return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
         // Replace this URL with your server-side endpoint for handling file uploads
         const response = await fetch("https://your-upload-endpoint.com/upload", {
            method: "POST",
            body: formData
         });

         if (response.ok) {
            alert("File upload is  successfully");
         } else {
            alert("Failed to upload the file due to errors");
         }
      } catch (error) {
         console.error("Error while uploading the file:", error);
         alert("Error occurred while uploading the file");
      }
   };

   return (
   <div >
      <label>Select Firmware</label>
      <input type="file" onChange={handleFileChange} />
      <button class="btn btn-primary" style={{marginLeft:80}} onClick={handleUpload}>Add Firmware</button>
   </div>
   );
};
export default FirmwareFileUpload;