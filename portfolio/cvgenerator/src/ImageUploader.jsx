import { useState } from 'react'
import { useRef } from 'react'
import './ImageUploader.css'
import FileInput from './components/FileInput'
import ImageCropper from "./components/ImageCropper"

const ImageUploader = () => {
  const [image, setImage] = useState('');
  const [currentPage, setCurrentPage] = useState('choose-img')
  const [imgAfterCrop, setImgAfterCrop] = useState('')

  const onImageSelected = (selectedImg) => {
    setImage(selectedImg)
    setCurrentPage('crop-img')
  }

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement('canvas')
    canvasEle.width= imgCroppedArea.width;
    canvasEle.height= imgCroppedArea.height;

    const context = canvasEle.getContext('2d');

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function(){
      context.drawImage(imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height)

        const dataURL = canvasEle.toDataURL('image/jpeg');

        setImgAfterCrop(dataURL);
        setCurrentPage('img-cropped')
    }
  }


  const onCropCancel = () => {
    setCurrentPage('choose-img')
    setImage('')
  }




  return (
    <div className="container">
      {currentPage === 'choose-img' ? ( 
      <FileInput onImageSelected={onImageSelected}/>
      ) : currentPage === "crop-img" ? (
      <ImageCropper
      image={image} onCropDone={onCropDone} onCropCancel={onCropCancel}/>
      ) : ( 
        <div style={{position:'relative'}}>
            <img src={imgAfterCrop} className="cropped-img" onClick={() => {
            setCurrentPage('crop-img')
          }}/>
        </div>
      )}
    </div>
  )
}

export default ImageUploader
