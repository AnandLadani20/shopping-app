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
import { useSelector } from 'react-redux';

const MAX_UPLOAD_LIMIT = 9;

const ProductDiscription = ({ setProductFilePath }) => {

    const DesertDiscState = useSelector((state) => state.desertForm)
    const miniCoolersDiscState = useSelector((state) => state.miniCoolersForm)
    const otherAirCoolersDiscState = useSelector((state) => state.otherAirCoolersForm)
    const portableCoolersDiscState = useSelector((state) => state.portableCoolersForm)
    const towerCoolersDiscState = useSelector((state) => state.towerCoolersForm)
    const windowCoolersDiscState = useSelector((state) => state.windowCoolersForm)

    const airIonizersDiscState = useSelector((state) => state.airIonizersForm)
    const carAirPurifiersDiscState = useSelector((state) => state.carAirPurifierForm)
    const charcoalAirPuriDiscSt = useSelector((state) => state.charcoalAirPurifierForm)
    const electroAirPuriDiscSt = useSelector((state) => state.electroAirPurifierForm)
    const hepaAirPuriDiscSt = useSelector((state) => state.hepaAirPurifierForm)
    const otherAirPuriDiscSt = useSelector((state) => state.otherAirPurifierForm)
    const portableAirPuriDiscSt = useSelector((state) => state.portableAirPurifierForm)
    const ulpaAirPuriDiscSt = useSelector((state) => state.ulpaAirPurifierForm)

    const otherDeodorisersDiscSt = useSelector((state) => state.otherDeodorisersForm)

    const blowerFansDiscSt = useSelector((state) => state.blowerFansForm)
    const boxFansDiscSt = useSelector((state) => state.boxFansForm)
    const ceilingFansDiscSt = useSelector((state) => state.ceilingFansForm)
    const clipFansDiscSt = useSelector((state) => state.clipFansForm)
    const drumFansDiscSt = useSelector((state) => state.drumFansForm)
    const exhaustFansDiscSt = useSelector((state) => state.exhaustFansForm)
    const floorFansDiscSt = useSelector((state) => state.floorFansForm)
    const otherFansDiscSt = useSelector((state) => state.otherFansForm)
    const pedestalFansDiscSt = useSelector((state) => state.pedestalFansForm)
    const personalFansDiscSt = useSelector((state) => state.personalFansForm)
    const tableFansDiscSt = useSelector((state) => state.tableFansForm)
    const towerFansDiscSt = useSelector((state) => state.towerFansForm)
    const vortexActionFansDiscSt = useSelector((state) => state.vortexActionFansForm)
    const wallMountedFansDiscSt = useSelector((state) => state.wallMountedFansForm)
    const windowFansDiscSt = useSelector((state) => state.windowFansForm)

    const otherHeatNCoolingDiscSt = useSelector((state) => state.otherHeatNCoolingForm)

    const airPuriPartNAccessDiscSt = useSelector((state) => state.airPuriPartNAccessForm)
    const dehumidPartNAccessDiscSt = useSelector((state) => state.dehumidPartNAccessForm)
    const evaCoolerPartNAccessDiscSt = useSelector((state) => state.evaCoolerPartNAccessForm)
    const fanPartNAccessDiscSt = useSelector((state) => state.fanPartNAccessForm)
    const heaterPartNAccessDiscSt = useSelector((state) => state.heaterPartNAccessForm)
    const humidiPartNAccessDiscSt = useSelector((state) => state.humidiPartNAccessForm)
    const otherPartNAccessDiscSt = useSelector((state) => state.otherPartNAccessForm)
    const replaceBelthumidiDiscSt = useSelector((state) => state.replaceBelthumidiForm)


    const { control, formState: { errors } } = useFormContext();

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
            {
                (DesertDiscState || miniCoolersDiscState || otherAirCoolersDiscState || portableCoolersDiscState || towerCoolersDiscState || windowCoolersDiscState
                 || airIonizersDiscState || carAirPurifiersDiscState || charcoalAirPuriDiscSt || electroAirPuriDiscSt || hepaAirPuriDiscSt || otherAirPuriDiscSt 
                || portableAirPuriDiscSt || ulpaAirPuriDiscSt || otherDeodorisersDiscSt || blowerFansDiscSt || boxFansDiscSt || ceilingFansDiscSt || clipFansDiscSt
                || drumFansDiscSt || exhaustFansDiscSt || floorFansDiscSt || otherFansDiscSt || pedestalFansDiscSt || personalFansDiscSt || tableFansDiscSt || towerFansDiscSt
                || vortexActionFansDiscSt || wallMountedFansDiscSt || windowFansDiscSt || otherHeatNCoolingDiscSt || airPuriPartNAccessDiscSt || dehumidPartNAccessDiscSt || evaCoolerPartNAccessDiscSt
                || fanPartNAccessDiscSt || heaterPartNAccessDiscSt || humidiPartNAccessDiscSt || otherPartNAccessDiscSt || replaceBelthumidiDiscSt) && (
                    <>

                        <div className='row'>
                            <Controller
                                control={control}
                                name='productDesc'
                                rules={{
                                    required: "product description is required"
                                }}

                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-2 col-lg-2 text-end">
                                            <label htmlFor="productDesc" className="labelbold me-2">
                                                Product Description
                                            </label>
                                        </div>
                                        <div className="col-8 col-sm-8 col-lg-8">
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                minRows={5}
                                                placeholder="About the Products."

                                                style={{ width: "100%", padding: "5px" }}
                                                {...field}
                                                id='productDesc'
                                                error={Boolean(errors.productDesc)}
                                            />
                                        </div>

                                    </>
                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <Controller
                                control={control}
                                name='bulletPoint'
                                rules={{
                                    required: "bullet Point is required",

                                }}
                                render={({ field }) => (
                                    <>
                                        <div className="col-4 col-sm-2 col-lg-2 text-end">
                                            <label htmlFor="bulletPoint" className="labelbold me-2">
                                                Bullet Point
                                            </label>
                                        </div>
                                        <div className="col-8 col-sm-8 col-lg-8">
                                            <TextField
                                                id="bulletPoint"
                                                placeholder={`3D glasses "requires"`}
                                                variant="outlined"
                                                style={{ width: "100%" }}
                                                {...field}
                                                error={Boolean(errors.bulletPoint)}
                                            />
                                        </div>

                                    </>

                                )}
                            />
                        </div>
                        <div className='row' style={{ marginTop: "10px" }}>
                            <div className="col-4 col-sm-2 col-lg-2 text-end">
                                <label className='labelbold'>Images</label>
                            </div>
                            <div className="col-8 col-sm-8 col-lg-8">

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
                                                            <button type='button' onClick={() => handleMoveImageLeft(index)} className='product-image-show-box-left-position-btn'><FiChevronLeft className='product-image-show-box-left-position' /></button>
                                                            <button type='button' onClick={() => handleMoveImageRight(index)} className='product-image-show-box-right-position-btn'><FiChevronRight className='product-image-show-box-right-position' /></button>
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
                        </div>
                    </>
                )
            }

        </>
    )
}

export default ProductDiscription