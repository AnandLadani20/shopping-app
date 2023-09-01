import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
    TextField,
    Button,

} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { RiImageAddFill } from 'react-icons/ri';
import { FaUpload } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import demoImage from '../../../Assests/testimonial/testimonial2.jpg'

const MAX_UPLOAD_LIMIT = 9;

const ProductDiscription = ({ setProductFilePath }) => {
    const { control, formState: { errors } } = useFormContext();
    // const [uploadedFiles, setUploadedFiles] = useState([]);
    // const [filePaths, setFilePaths] = useState([]);

    // const handleFileChange = (e) => {
    //     const chosenFiles = Array.from(e.target.files);

    //     const remainingSlots = MAX_UPLOAD_LIMIT - uploadedFiles.length;
    //     const filesToUpload = chosenFiles.slice(0, remainingSlots);

    //     // Append new files to the existing ones
    //     setUploadedFiles(prevUploadedFiles => [...prevUploadedFiles, ...filesToUpload]);
    //     setFilePaths(prevFilePaths => [...prevFilePaths, ...filesToUpload.map(file => file.name)]);
    //     console.log('File paths array:', filePaths);

    // };
    // const handleUploadMultiple = () => {

    //     setProductFilePath(filePaths)
    //     console.log('File paths array:', filePaths);

    //     // You can include this array in your API submission
    // };
    // const handleDeleteImage = (index) => {
    //     // Create a copy of the arrays without the deleted image
    //     const updatedUploadedFiles = uploadedFiles.filter((file, i) => i !== index);
    //     const updatedFilePaths = filePaths.filter((filePath, i) => i !== index);

    //     setUploadedFiles(updatedUploadedFiles);
    //     setFilePaths(updatedFilePaths);
    // };
    // const handleReplaceImage = (index, newFile) => {
    //     // Create a copy of the arrays with the replaced image
    //     const updatedUploadedFiles = uploadedFiles.map((file, i) => (i === index ? newFile : file));
    //     const updatedFilePaths = filePaths.map((filePath, i) => (i === index ? newFile.name : filePath));

    //     setUploadedFiles(updatedUploadedFiles);
    //     setFilePaths(updatedFilePaths);
    // };
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [filePaths, setFilePaths] = useState(Array(MAX_UPLOAD_LIMIT).fill(null));

    const handleFileChange = async (e, index) => {
        const chosenFile = e.target.files[0];
        const newFilePaths = filePaths.slice();

        if (chosenFile) {
            newFilePaths[index] = chosenFile.name;

            const reader = new FileReader();
            reader.onload = () => {
                const newUploadedFiles = [...uploadedFiles];
                newUploadedFiles[index] = { file: chosenFile, dataURL: reader.result };
                setUploadedFiles(newUploadedFiles);
            };
            reader.readAsDataURL(chosenFile);
        }

        setFilePaths(newFilePaths);
    };

    const handleDeleteAllFiles = () => {
        setUploadedFiles([]);
        setFilePaths(Array(MAX_UPLOAD_LIMIT).fill(null));
    };

    const handleUpload9Images = (e) => {
        const chosenFiles = Array.from(e.target.files);
        const newFilePaths = Array.from({ length: MAX_UPLOAD_LIMIT }, (_, i) =>
            i < chosenFiles.length ? chosenFiles[i].name : null
        );

        const newUploadedFiles = chosenFiles.map((file) => ({
            file,
            dataURL: URL.createObjectURL(file),
        }));

        setUploadedFiles(newUploadedFiles);
        setFilePaths(newFilePaths);
    };

    const handleDeleteImage = (index) => {
        const newUploadedFiles = uploadedFiles.slice();
        newUploadedFiles[index] = null;

        const newFilePaths = filePaths.slice();
        newFilePaths[index] = null;

        setUploadedFiles(newUploadedFiles);
        setFilePaths(newFilePaths);
    };

    const handleReplaceImage = (e, index) => {
        const chosenFile = e.target.files[0];
        if (chosenFile) {
            const newUploadedFiles = [...uploadedFiles];
            const reader = new FileReader();
            reader.onload = () => {
                newUploadedFiles[index] = { file: chosenFile, dataURL: reader.result };
                setUploadedFiles(newUploadedFiles);
            };
            reader.readAsDataURL(chosenFile);
        }
    };
    
  const handleMoveImageLeft = (index) => {
    if (index > 0) {
      const newUploadedFiles = [...uploadedFiles];
      const newFilePaths = [...filePaths];
      const tempFile = newUploadedFiles[index - 1];
      const tempFilePath = newFilePaths[index - 1];

      newUploadedFiles[index - 1] = newUploadedFiles[index];
      newUploadedFiles[index] = tempFile;

      newFilePaths[index - 1] = newFilePaths[index];
      newFilePaths[index] = tempFilePath;

      setUploadedFiles(newUploadedFiles);
      setFilePaths(newFilePaths);
    }
  };

  const handleMoveImageRight = (index) => {
    if (index < MAX_UPLOAD_LIMIT - 1 && uploadedFiles[index + 1]) {
      const newUploadedFiles = [...uploadedFiles];
      const newFilePaths = [...filePaths];
      const tempFile = newUploadedFiles[index + 1];
      const tempFilePath = newFilePaths[index + 1];

      newUploadedFiles[index + 1] = newUploadedFiles[index];
      newUploadedFiles[index] = tempFile;

      newFilePaths[index + 1] = newFilePaths[index];
      newFilePaths[index] = tempFilePath;

      setUploadedFiles(newUploadedFiles);
      setFilePaths(newFilePaths);
    }
  };
    return (
        <>
            <div>
                <Controller
                    control={control}
                    name='productDesc'
                    rules={{
                        required: "product description is required"
                    }}

                    render={({ field }) => (
                        <>
                            <div className='d-flex align-items-start'>
                                <label htmlFor="productDesc" className="labelbold me-2">
                                    Product Description
                                </label>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={5}
                                    placeholder="A mini mirrored compact featuring two crease-proof NARS eye shadows in modern, complementary shades.  This 
                                    long-wearing, crease-resistant formula is uniquely paired in dazzling and creative color combinations, expertly
                                     coordinated by François Nars. Worn together or alone, these shades are richly pigmented and can be applied sheer
                                      or built up for a more dramatic effect. Used wet, these shadows also double as eyeliners."

                                    style={{ width: "70%", padding: "5px" }}
                                    {...field}
                                    id='productDesc'
                                    error={Boolean(errors.productDesc)}
                                />
                            </div>
                        </>
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name='bulletPoint'
                    rules={{
                        required: "bullet Point is required",

                    }}
                    render={({ field }) => (
                        <>
                            <div className="d-flex align-items-center mt-4">
                                <label htmlFor="bulletPoint" className="labelbold me-2">
                                    Bullet Point
                                </label>
                                <TextField
                                    id="bulletPoint"
                                    placeholder={`3D glasses "requires"`}
                                    variant="outlined"
                                    style={{ width: "50%" }}
                                    {...field}
                                    error={Boolean(errors.bulletPoint)}
                                />
                            </div>
                        </>

                    )}
                />
            </div>
            <div>
                <label className='labelbold'>Images</label>

                <div className='uploaded-files-list'>
                    <div className='my-4'>

                        <label htmlFor='file-upload-9' className='upload-multipleFiles-txt'>
                            <FaUpload className='upload-multipleFiles-icon' />
                            Upload 9 Images 	&nbsp;
                            <input
                                id='file-upload-9'
                                type='file'
                                style={{ display: 'none' }}
                                multiple
                                accept='image/*'
                                onChange={handleUpload9Images}
                            />
                        </label>
                        <label className='upload-multipleFiles-highlightTxt'>  Or drag and drop 1 or more files below.</label>
                        <p>Uploaded:0 of 9 images. Maximum 9 images are allowed. You can arrange the order after uploading</p>
                    </div>
                    <div className='uploaded-file-item'>
                        {filePaths.map((filePath, index) => (
                            <div key={index} >
                                {uploadedFiles[index] && (
                                    <div className='product-image-show-box'>
                                        <img
                                            src={uploadedFiles[index].dataURL}
                                            alt={`Uploaded ${index + 1}`}
                                            height={200}
                                        />
                                        <div className='product-image-show-childbox'>
                                            <input
                                                type='file'
                                                id={`file-input-replace-${index}`}
                                                onChange={(e) => handleReplaceImage(e, index)}
                                                style={{ display: 'none' }}
                                            />
                                            <label htmlFor={`file-input-replace-${index}`} className='product-image-show-box-replace-label'>
                                                <AiOutlinePlus className='product-image-show-box-replace' />
                                            </label>

                                            <button type='button' onClick={() => handleDeleteImage(index)} className='product-image-show-box-delete-btn'><MdDelete className='product-image-show-box-delete' /></button>
                                            <button type='button' onClick={() => handleMoveImageLeft(index)} className='product-image-show-box-left-position-btn'><FiChevronLeft className='product-image-show-box-left-position'/></button>
                                            <button type='button' onClick={() => handleMoveImageRight(index)} className='product-image-show-box-right-position-btn'><FiChevronRight className='product-image-show-box-right-position'/></button>
                                        </div>
                                    </div>
                                )}
                                {!uploadedFiles[index] && (
                                    <div className='product-image-upload-box'>
                                        <Controller
                                            name={`uploadedFiles[${index}]`}
                                            control={control}
                                            render={({ field }) => (
                                                <>
                                                    <button
                                                        className='product-image-upload-box-btn'
                                                        type='button'
                                                        onClick={() => {
                                                            const fileInput = document.getElementById(`file-input-${index}`);
                                                            if (fileInput) {
                                                                fileInput.click();
                                                            }
                                                        }}
                                                    >
                                                        <RiImageAddFill className='product-image-upload-icon' />
                                                        <input
                                                            type='file'
                                                            id={`file-input-${index}`}
                                                            onChange={(e) => {
                                                                field.onChange(e);
                                                                handleFileChange(e, index);
                                                            }}
                                                            style={{ display: "none" }}
                                                        />
                                                    </button>
                                                </>
                                            )}
                                        />
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        <Button type="button" variant='contained' onClick={handleDeleteAllFiles}>Delete All Files</Button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProductDiscription