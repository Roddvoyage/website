import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react'
import mail from '/mail.png'
import phone from '/phone-call.png'
import website from '/maps-and-location.png'
import location from '/local-na-rede-internet.png'
import './App.css'
import Settings from './settings.jsx'
import {settingsList} from './data.jsx'
import ImageUploader from './ImageUploader'

export default function PDF() {


  const [count, setCount] = useState(0)
  const [settings, setSettings] = useState(settingsList);

   const [fullName, setFullName] = useState('')
   const [age, setAge] = useState('')
   const [profession, setProfession] = useState('')
   const [summary, setSummary] = useState('')
   const [emailcv, setEmailcv] = useState('')
   const [phonecv, setPhonecv] = useState('')
   const [locationcv, setLocationcv] = useState('')
   const [websitecv, setWebsitecv] = useState('')
   const [university1, setUniversity1] = useState('')
   const [degree1, setDegree1] = useState('')
   const [eduStart1, setEduStart1] = useState('')
   const [eduEnd1, setEduEnd1] = useState('')
   const [university2, setUniversity2] = useState('')
   const [degree2, setDegree2] = useState('')
   const [eduStart2, setEduStart2] = useState('')
   const [eduEnd2, setEduEnd2] = useState('')
   const [university3, setUniversity3] = useState('')
   const [degree3, setDegree3] = useState('')
   const [eduStart3, setEduStart3] = useState('')
   const [eduEnd3, setEduEnd3] = useState('')
   const [company1, setCompany1] = useState('')
   const [job1, setJob1] = useState('')
   const [workStart1, setWorkStart1] = useState('')
   const [workEnd1, setWorkEnd1] = useState('')
   const [company2, setCompany2] = useState('')
   const [job2, setJob2] = useState('')
   const [workStart2, setWorkStart2] = useState('')
   const [workEnd2, setWorkEnd2] = useState('')
   const [company3, setCompany3] = useState('')
   const [job3, setJob3] = useState('')
   const [workStart3, setWorkStart3] = useState('')
   const [workEnd3, setWorkEnd3] = useState('')
   const [technicalSkill, setTechnicalSkill] = useState('')

   const [technicalSkills, setTechnicalSkills] = useState([]);


     
 function chooseFullName(name) {
  setFullName(name)
 }
 function chooseAge(age) {
  setAge(age)
 }
 function chooseProfession(profession) {
  setProfession(profession)
 }
 function chooseSummary(sum){
  setSummary(sum);
 }
 function chooseEmail(email){
  setEmailcv(email);
 }
 function choosePhone(phone){
  setPhonecv(phone);
 }
 function chooseLocation(location){
  setLocationcv(location);
 }
 function chooseWebsite(website){
  setWebsitecv(website);
 }
 function chooseUni1(uni1){
  setUniversity1(uni1);
 }
 function chooseDegree1(deg1){
  setDegree1(deg1);
 }
 function chooseEduStart1(edus1){
  setEduStart1(edus1)
 }
 function chooseEduEnd1(edue1){
  setEduEnd1(edue1)
 }
 function chooseUni2(uni2){
  setUniversity2(uni2);
 }
 function chooseDegree2(deg2){
  setDegree2(deg2);
 }
 function chooseEduStart2(edus2){
  setEduStart2(edus2)
 }
 function chooseEduEnd2(edue2){
  setEduEnd2(edue2)
 }
 function chooseUni3(uni3){
  setUniversity3(uni3);
 }
 function chooseDegree3(deg3){
  setDegree3(deg3);
 }
 function chooseEduStart3(edus3){
  setEduStart3(edus3)
 }
 function chooseEduEnd3(edue3){
  setEduEnd3(edue3)
 }
 function chooseCompany1(company1){
  setCompany1(company1)
 }
 function chooseJob1(job1){
  setJob1(job1)
 }
 function chooseWorkStart1(works1){
  setWorkStart1(works1)
 }
 function chooseWorkEnd1(worke1){
  setWorkEnd1(worke1)
 }
 function chooseJob2(job2){
  setJob2(job2)
 }
 function chooseCompany2(company2){
  setCompany2(company2)
 }
 function chooseWorkStart2(works2){
  setWorkStart2(works2)
 }
 function chooseWorkEnd2(worke2){
  setWorkEnd2(worke2)
 }
 function chooseJob3(job3){
  setJob3(job3)
 }
 function chooseCompany3(company3){
  setCompany3(company3)
 }
 function chooseWorkStart3(works3){
  setWorkStart3(works3)
 }
 function chooseWorkEnd3(worke3){
  setWorkEnd3(worke3)
 }

 function chooseTechnicalSkill(technicalSkill) {
  setTechnicalSkill(technicalSkill);
}
const pdfRef = useRef();

const downloadPDF = () => {
  const input = pdfRef.current;

  html2canvas(input).then((canvas) => {
    let imgData = canvas.toDataURL('image/png');
    
    // Calculate aspect ratio of the HTML content
    let aspectRatio = canvas.width / canvas.height;

    // Set the PDF dimensions based on the aspect ratio
    let pdfWidth = 210; // Set your desired width (for example, A4 size width in mm)
    let pdfHeight = pdfWidth / aspectRatio;

    // Create the PDF instance with the calculated dimensions
    let pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight], true);
    
    // Calculate image dimensions to fit within the PDF
    let imgWidth = pdfWidth;
    let imgHeight = imgWidth / aspectRatio;

    let imgX = 0;
    let imgY = (pdfHeight - imgHeight) / 2; // Center vertically

    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);
    pdf.save('invoice.pdf');
  });
};


  return (
    <>
      <div className="grey-settings">
    <h1>cv generator</h1>
    <h2>Create your CV by filling out the forms below
and once you’re finished, <a onClick={downloadPDF}>download the pdf</a></h2>
<div className="settings-div">
{settings.map(setting => (
<Settings key={setting.id}
setting={setting}
chooseFullName={chooseFullName}
chooseAge={chooseAge}
chooseProfession={chooseProfession}
chooseSummary={chooseSummary}
chooseEmail={chooseEmail}
choosePhone={choosePhone}
chooseLocation={chooseLocation}
chooseWebsite={chooseWebsite}
chooseUni1={chooseUni1}
chooseDegree1={chooseDegree1}
chooseEduStart1={chooseEduStart1}
chooseEduEnd1={chooseEduEnd1}
chooseUni2={chooseUni2}
chooseDegree2={chooseDegree2}
chooseEduStart2={chooseEduStart2}
chooseEduEnd2={chooseEduEnd2}
chooseUni3={chooseUni3}
chooseDegree3={chooseDegree3}
chooseEduStart3={chooseEduStart3}
chooseEduEnd3={chooseEduEnd3}
chooseCompany1={chooseCompany1}
chooseJob1={chooseJob1}
chooseWorkStart1={chooseWorkStart1}
chooseWorkEnd1={chooseWorkEnd1}
chooseCompany2={chooseCompany2}
chooseJob2={chooseJob2}
chooseWorkStart2={chooseWorkStart2}
chooseWorkEnd2={chooseWorkEnd2}
chooseCompany3={chooseCompany3}
chooseJob3={chooseJob3}
chooseWorkStart3={chooseWorkStart3}
chooseWorkEnd3={chooseWorkEnd3}
chooseTechnicalSkill={chooseTechnicalSkill}
/>
))}
</div>

    </div>
    <div className="cv-side">
      <div className="cv-paper" ref={pdfRef}>
    <div className = "blue-side">
      <div className="blue-side-top">
      <div className="basic-info">
        <ImageUploader/>
<h1 style={{display: 'flex', justifyContent:'center', alignItems:'center', fontSize: '32pt'}}>{fullName}</h1>
<div className="age-profession">
<h2>{age}</h2>
<h1>{profession}</h1>
</div>
</div>
       </div>
       <p>{summary}</p>
<div className="contact-info">
<div>
<img style={{display: phonecv? 'flex': 'none'}} className='phone-logo' src={phone}></img><h3>{phonecv}</h3>
</div>
<div>
<img style={{display: emailcv? 'flex': 'none'}}  className='email-logo' src={mail}></img><h3>{emailcv}</h3>
</div>
<div>
<img style={{display: locationcv? 'flex': 'none'}}  className='location-logo' src={location}></img><h3>{locationcv}</h3>
</div>
<div>
<img style={{display: websitecv? 'flex': 'none'}}  className='website-logo' src={website}></img><h3>{websitecv}</h3>
</div>
</div>
       </div>
       <div className = "right-side">
        <div className="education-background">
          <h4>EDUCATION BACKGROUND</h4>
          <div className="education-background-list">
            <h1>{university1}</h1>
              <h2>{degree1}</h2>
              <div style={{display:'flex', flexDirection: 'row'}}><h3>{eduStart1}</h3><h3 style={{display: eduStart1 ?'flex' : 'none'}}>&nbsp;-&nbsp;</h3><h3>{eduEnd1}</h3></div>
          </div>
          <div className="education-background-list2">
            <h1>{university2}</h1>
              <h2>{degree2}</h2>
              <div style={{display:'flex', flexDirection: 'row'}}><h3>{eduStart2}</h3><h3 style={{display: eduStart2 ?'flex' : 'none'}}>&nbsp;-&nbsp;</h3><h3>{eduEnd2}</h3></div>
          </div>
          <div className="education-background-list3">
            <h1>{university3}</h1>
              <h2>{degree3}</h2>
              <div style={{display:'flex', flexDirection: 'row'}}><h3>{eduStart3}</h3><h3 style={{display: eduStart3 ?'flex' : 'none'}} >&nbsp;-&nbsp;</h3><h3>{eduEnd3}</h3></div>
          </div>
        </div>
        <div className="work-experience">
          <h4>WORK EXPERIENCE</h4>
          <div className="work-experience-list">
            <h1>{job1}</h1>
              <h2>{company1}</h2>
              <div style={{display:'flex', flexDirection: 'row'}}><h3>{workStart1}</h3><h3 style={{display: workStart3 ?'flex' : 'none'}} >&nbsp;-&nbsp;</h3><h3>{workEnd1}</h3></div>
          </div>
          <div className="work-experience-list2">
            <h1>{job2}</h1>
              <h2>{company2}</h2>
              <div style={{display:'flex', flexDirection: 'row'}}><h3>{workStart2}</h3><h3 style={{display: workStart3 ?'flex' : 'none'}} >&nbsp;-&nbsp;</h3><h3>{workEnd2}</h3></div>
          </div>
          <div className="work-experience-list3">
            <h1>{job3}</h1>
              <h2>{company3}</h2>
              <div style={{display:'flex', flexDirection: 'row'}}><h3>{workStart3}</h3><h3 style={{display: workStart3 ?'flex' : 'none'}} >&nbsp;-&nbsp;</h3><h3>{workEnd3}</h3></div>
          </div>
        </div>
        <div className="technical-skills">
          <h4>TECHNICAL SKILLS</h4>
        {/* Display the list of technical skills */}
        <h3 className='technical-skills-input' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', maxWidth: '400px'}}>
  {Array.isArray(technicalSkill) ? (
    technicalSkill.map((skill, index) => (
      <div key={index} style={{ width: index < 16 ? '50%' : '100%', boxSizing: 'border-box' }}>
        {skill}
      </div>
    ))
  ) : (
    <div></div>
  )}
</h3>

        </div>

       </div>
       </div>
       </div>
    </>
  );
}
