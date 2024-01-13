import { useState } from 'react'
import { useRef } from 'react'

const FileInput = ({ onImageSelected }) => {
    const inputRef = useRef();

    const handleOnChange = (event) => {
        if(event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (e){
                onImageSelected(reader.result)
            }
        }
    }

    const onChooseImg = () => {
        inputRef.current.click();
    }

    return (
        <div>
            <input type='file'
            accept='image/*'
            ref={inputRef}
            onChange={handleOnChange}
            style={{display:'none'}}/>
            <img src='upload-photo.png' onClick={onChooseImg} className='image-btn'></img>
        </div>
    )
}

export default FileInput