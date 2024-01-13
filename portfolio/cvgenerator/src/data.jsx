import { useState } from 'react'
import BasicInfoCv from './basicInfocv'

export const settingsList = [{
    id: 0,
    selected: 'false',
    subject:'BASIC INFORMATION',
    url:'/triangle.png',
},{
    id: 1,
    selected: 'false',
    subject:"CONTACT INFO",
    url:'/triangle.png',
},{
    id: 2,
    selected: 'false',
    subject:"EDUCATION BACKGROUND",
    url:'/triangle.png',
},{
    id: 3,
    selected: 'false',
    subject:"WORK EXPERIENCE",
    url:'/triangle.png',
},{
    id: 4,
    selected: 'false',
    subject:"TECHNICAL SKILLS",
    url:'/triangle.png',
}]

export const exampleData = {
    fullNameValue:'warahey'
}
    


export default function BasicInformation({choosemessage}){

    const [val, setVal] = useState('');


    const handleChange = event => {
        setVal(event.target.value)
        console.log(event.target.value)
    };

    return(
        <>
        <div style={{display:'flex', flexDirection:'column', width:'500px'}}>
        <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>first and last name</h5>
    <input onChange={handleChange} style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white'}} maxLength={'30'}/>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>age</h5>
    <input style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white', width:'40px'}} type={"number"} onInput={(e) => e.target.value = e.target.value.slice(0, 2)}/>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>professional title</h5>
    <input style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white'}}/>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>summary about yourself</h5>
    <textarea style={{height: '210px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white' }} maxLength={'400'}></textarea>
    </div>
    </div>
    </>)
}

