import React from "react"
import { useState } from "react"
import Cropper from "react-easy-crop"

const ImageCropper = ({ image, onCropDone, onCropCancel}) => {
    const [crop, setCrop] = useState({ x:0, y:0 })
    const [zoom, setZoom] = useState(1)

    const [croppedArea, setCroppedArea] = useState(null)
    const [aspectRatio, setAspectRatio] = useState(1/1);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) =>{
        setCroppedArea(croppedAreaPixels)
    }

    const onAspetioRatioChange = (event) => {
        setAspectRatio(event.target.value)
    }

    return (
        <div className="cropper">
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Cropper
            image={image}
            aspectRatio={aspectRatio}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{containerStyle:{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:"100%",
                height:"100%",
                backgroundColor:'#fff'
            },
        }}
            />
            </div>
            <div className="action-btns">
            <div className="aspect-ratios" onChange={onAspetioRatioChange}>
            </div>

            <div className="btn-container">
                <button className="btn btn-outline" onClick={onCropCancel}>Cancel</button>
                <button className="btn" onClick={() => {onCropDone(croppedArea)}}>Crop & Apply</button>
            </div>
            
        </div>
        </div>
        )
}

export default ImageCropper