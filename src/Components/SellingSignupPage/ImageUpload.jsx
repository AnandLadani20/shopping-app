import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    console.log('selectedFile', selectedFile);
    formData.append('file', selectedFile);

    try {
      const response = await axios.put(
        'https://ntadev.it/images/4',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
             'Authorization':'Bearer eyJraWQiUhXGBqbmd5s2OiIaNytdnEo6MICyuvy9JETIKuopXB3yEqylGTBBg'
          },
        }
      );
      console.log(response.data);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('There was an error uploading the file!', error);
      alert('File upload failed!');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
