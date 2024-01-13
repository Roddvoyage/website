import BasicInformation from './data.jsx';
import ContactInformation from './contact';
import EducationBackground from './education';
import WorkExperience from './work';
import TechnicalSkills from './skills';
import './App.css'
import './TagsINputStyle.css'
import React, { useState, useRef } from 'react';


 
 

export default function Settings({
  setting,
  chooseFullName,
  chooseAge,
  chooseProfession,
  chooseSummary,
  chooseEmail,
  choosePhone,
  chooseLocation,
  chooseWebsite,
  chooseUni1,
  chooseDegree1,
  chooseEduStart1,
  chooseEduEnd1,
  chooseUni2,
  chooseDegree2,
  chooseEduStart2,
  chooseEduEnd2,
  chooseUni3,
  chooseDegree3,
  chooseEduStart3,
  chooseEduEnd3,
  chooseCompany1,
  chooseJob1,
  chooseWorkStart1,
  chooseWorkEnd1,
  chooseCompany2,
  chooseJob2,
  chooseWorkStart2,
  chooseWorkEnd2,
  chooseCompany3,
  chooseJob3,
  chooseWorkStart3,
  chooseWorkEnd3,
chooseTechnicalSkill}) {


  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBasic, setBasic] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isEducation, setEducation] = useState(false);
  const [isWork, setWork] = useState(false);
  const [isSkills, setSkills] = useState(false);

  /* after clicking add more on education*/
  const [isEducation2, setEducation2] = useState(false);
  const [isEducation3, setEducation3] = useState(false);

  const selected = tags => console.log(tags)

  function openEdu2(){
    setEducation2(current => !current);
  }

  function openEdu3(){
    setEducation3(current => !current);
  }
  
  /* after clicking add more on education*/

  /*
  const [isRemoved2, setRemoved2] = useState(false);
  const [isRemoved3, setRemoved3] = useState(false);

  function removeEdu2(){
    setWork2(current => !current);
  }

  function removeEdu3(){
    setWork3(current => !current);
  }

  /* after clicking add more on work*/
    const [isWork2, setWork2] = useState(false);
    const [isWork3, setWork3] = useState(false);
  
    function openWork2(){
      setWork2(current => !current);
    }
  
    function openWork3(){
      setWork3(current => !current);
    }

  const openSetting= (e) => {
    // 👇️ toggle
    setIsActive(current => !current);
    if(e.target.innerText === 'BASIC INFORMATION'){
      setBasic(current => !current);
    } else if (e.target.innerText === 'CONTACT INFO'){
      setContact(current => !current);
    } else if (e.target.innerText === 'EDUCATION BACKGROUND'){
      setEducation(current => !current);
    } else if (e.target.innerText === 'WORK EXPERIENCE'){
      setWork(current => !current);
    }else if (e.target.innerText === 'TECHNICAL SKILLS'){
      setSkills(current => !current);
    }
  }

    const changeColor = () => {
      // 👇️ toggle
      setIsHovered(current => !current);
    }


{/*BASIC-INFO-FUNCTIONS*/}
  const [fullNameVal, setFullNameVal] = useState('');
  const [ageVal, setAgeVal] = useState('');
  const [professionVal, setProfessionVal] = useState('');
  const [summaryVal, setSummaryVal] = useState('')
  const [fullNameValValidate, setFullNameValValidate] = useState(true);
  const [ageValValidate, setAgeValValidate] = useState(true);
  const [professionValValidate, setProfessionValValidate] = useState(true);
  const [summaryValValidate, setSummaryValValidate] = useState(true)

  const handleChangeFullName = (event )=> {
      setFullNameVal(event.target.value);
}
;
  const handleChangeAge = (event )=> {
    setAgeVal(event.target.value);
  };
  const handleProfession = (event) => {
    setProfessionVal(event.target.value)
  }
  const handleSummary = (event) => {
    setSummaryVal(event.target.value)
  }

  function basicInfoClick(){
    if(fullNameVal.length > '0'){
      setFullNameValValidate(true);
    }else {
      setFullNameValValidate(false);
    }

    if(ageVal > '17'){
      setAgeValValidate(true);
    }else {
      setAgeValValidate(false);
    }

    if(professionVal.length > '0'){
      setProfessionValValidate(true);
    }else {
      setProfessionValValidate(false);
    }

    if(summaryVal.length > '30'){
      setSummaryValValidate(true);
    }else {
      setSummaryValValidate(false);
    }

    if(fullNameVal.length > '0' && ageVal > '17' && professionVal.length > '0' && summaryVal.length > '30' ){
        chooseFullName(fullNameVal);
        chooseAge(ageVal);
        chooseProfession(professionVal);
        chooseSummary(summaryVal)
        setFullNameValValidate(true);
        setAgeValValidate(true);
        setProfessionValValidate(true);
        setSummaryValValidate(true)
      } else {
        return 0
      }
    }


{/*CONTACT-INFO-FUNCTIONS*/}
const [emailVal, setEmailVal] = useState('');
const [phoneVal, setPhoneVal] = useState('123');
const [locationVal, setLocationVal] = useState('');
const [websiteVal, setWebsiteVal] = useState('')
const [emailValValidate, setEmailValValidate] = useState(true);
const [phoneValValidate, setPhoneValValidate] = useState(true);
const [locationValValidate, setLocationValValidate] = useState(true);
const [websiteValValidate, setWebsiteValValidate] = useState(true)

const handleChangeEmail = (event)=> {
    setEmailVal(event.target.value);
};
const handleChangePhone = (event)=> {
  setPhoneVal(event.target.value);
};
const handleChangeLocation = (event) => {
  setLocationVal(event.target.value)
}
const handleChangeWebsite = (event) => {
  setWebsiteVal(event.target.value)
}


function contactInfoClick(){
  if(emailVal.includes('@')){
    setEmailValValidate(true);
  }else {
    setEmailValValidate(false);
  }

  if(phoneVal.length > '5'){
    setPhoneValValidate(true);
  }else {
    setPhoneValValidate(false);
  }

  if(locationVal.length > '1'){
    setLocationValValidate(true);
  }else {
    setLocationValValidate(false);
  }

  if(websiteVal.length > '5'){
    setWebsiteValValidate(true);
  }else {
    setWebsiteValValidate(false);
  }

  if(emailVal.includes('@') && phoneVal.length > '5' && locationVal.length > '1' && websiteVal.length > '5' ){
    chooseEmail(emailVal);
    choosePhone(phoneVal);
    chooseLocation(locationVal);
    chooseWebsite(websiteVal)
    setEmailValValidate(true);
    setPhoneValValidate(true);
    setLocationValValidate(true);
    setWebsiteValValidate(true);
    } else {
      return 0
    }
  }

{/*EDUCATION-BACKGROUND-FUNCTIONS*/}
const [uni1Val, setUni1Val] = useState('');
const [deg1Val, setDeg1Val] = useState('');
const [eduStart1Val, setEduStart1Val] = useState('');
const [eduEnd1Val, setEduEnd1Val] = useState('');
const [uni1ValValidate, setUni1ValValidate] = useState(true);
const [deg1ValValidate, setDeg1ValValidate] = useState(true);
const [eduStart1ValValidate, setEduStart1ValValidate] = useState(true);
const [eduEnd1ValValidate, setEduEnd1ValValidate] = useState(true);

const handleChangeUni1 = (event )=> {
    setUni1Val(event.target.value);
};
const handleChangeDeg1 = (event )=> {
  setDeg1Val(event.target.value);
};
const handleChangeEduStart1 = (event) => {
  setEduStart1Val(event.target.value)
}
const handleChangeEduEnd1 = (event) => {
  setEduEnd1Val(event.target.value)
}


function eduInfoClick(){
  if(uni1Val.length > '1'){
    setUni1ValValidate(true);
  }else {
    setUni1ValValidate(false);
  }

  if(deg1Val.length > '5'){
    setDeg1ValValidate(true);
  }else {
    setDeg1ValValidate(false);
  }

  if(eduStart1Val > '1960' && eduStart1Val > '1960') {
    setEduStart1ValValidate(true);
  }else {
    setEduStart1ValValidate(false);
  }

  if(eduEnd1Val > '1960' && eduEnd1Val < '2006'){
    setEduEnd1ValValidate(true);
  }else {
    setEduEnd1ValValidate(false);
  }

  if(uni1Val.length > '1' && deg1Val.length > '5' && (eduStart1Val > '1960' && eduStart1Val > '1960') && (eduEnd1Val > '1960' && eduEnd1Val < '2006')){
    chooseUni1(uni1Val);
    chooseDegree1(deg1Val)
    chooseEduStart1(eduStart1Val)
    chooseEduEnd1(eduEnd1Val)
    setUni1ValValidate(true);
    setDeg1ValValidate(true);
    setEduStart1ValValidate(true);
    setEduEnd1ValValidate(true);
    } else {
      return 0
    }

  }

{/*EDUCATION-BACKGROUND-2-FUNCTIONS*/}
const [uni2Val, setUni2Val] = useState('');
const [deg2Val, setDeg2Val] = useState('');
const [eduStart2Val, setEduStart2Val] = useState('');
const [eduEnd2Val, setEduEnd2Val] = useState('');
const [uni2ValValidate, setUni2ValValidate] = useState(true);
const [deg2ValValidate, setDeg2ValValidate] = useState(true);
const [eduStart2ValValidate, setEduStart2ValValidate] = useState(true);
const [eduEnd2ValValidate, setEduEnd2ValValidate] = useState(true);

const handleChangeUni2 = (event )=> {
    setUni2Val(event.target.value);
};
const handleChangeDeg2 = (event )=> {
  setDeg2Val(event.target.value);
};
const handleChangeEduStart2 = (event) => {
  setEduStart2Val(event.target.value)
}
const handleChangeEduEnd2 = (event) => {
  setEduEnd2Val(event.target.value)
}





function eduInfoClick2(){
  if(uni2Val.length > '1'){
    setUni2ValValidate(true);
  }else {
    setUni2ValValidate(false);
  }

  if(deg2Val.length > '5'){
    setDeg2ValValidate(true);
  }else {
    setDeg2ValValidate(false);
  }

  if(eduStart2Val > '1960' && eduStart2Val > '1960') {
    setEduStart2ValValidate(true);
  }else {
    setEduStart2ValValidate(false);
  }

  if(eduEnd2Val > '1960' && eduEnd2Val < '2006'){
    setEduEnd2ValValidate(true);
  }else {
    setEduEnd2ValValidate(false);
  }

  if(uni2Val.length > '1' && deg2Val.length > '5' && (eduStart2Val > '1960' && eduStart2Val > '1960') && (eduEnd2Val > '1960' && eduEnd2Val < '2006')){
    chooseUni2(uni2Val);
    chooseDegree2(deg2Val)
    chooseEduStart2(eduStart2Val)
    chooseEduEnd2(eduEnd2Val)
    setUni2ValValidate(true);
    setDeg2ValValidate(true);
    setEduStart2ValValidate(true);
    setEduEnd2ValValidate(true);
    } else {
      return 0
    }

  }




{/*EDUCATION-BACKGROUND-3-FUNCTIONS*/}
const [uni3Val, setUni3Val] = useState('');
const [deg3Val, setDeg3Val] = useState('');
const [eduStart3Val, setEduStart3Val] = useState('');
const [eduEnd3Val, setEduEnd3Val] = useState('')
const [uni3ValValidate, setUni3ValValidate] = useState(true);
const [deg3ValValidate, setDeg3ValValidate] = useState(true);
const [eduStart3ValValidate, setEduStart3ValValidate] = useState(true);
const [eduEnd3ValValidate, setEduEnd3ValValidate] = useState(true);

const handleChangeUni3 = (event )=> {
    setUni3Val(event.target.value);
};
const handleChangeDeg3 = (event )=> {
  setDeg3Val(event.target.value);
};
const handleChangeEduStart3 = (event) => {
  setEduStart3Val(event.target.value)
}
const handleChangeEduEnd3 = (event) => {
  setEduEnd3Val(event.target.value)
}


function eduInfoClick3(){
  if(uni3Val.length > '1'){
    setUni3ValValidate(true);
  }else {
    setUni3ValValidate(false);
  }

  if(deg3Val.length > '5'){
    setDeg3ValValidate(true);
  }else {
    setDeg3ValValidate(false);
  }

  if(eduStart3Val > '1960' && eduStart3Val > '1960') {
    setEduStart3ValValidate(true);
  }else {
    setEduStart3ValValidate(false);
  }

  if(eduEnd3Val > '1960' && eduEnd3Val < '2006'){
    setEduEnd3ValValidate(true);
  }else {
    setEduEnd3ValValidate(false);
  }

  if(uni3Val.length > '1' && deg3Val.length > '5' && (eduStart3Val > '1960' && eduStart3Val > '1960') && (eduEnd3Val > '1960' && eduEnd3Val < '2006')){
    chooseUni3(uni3Val);
    chooseDegree3(deg3Val)
    chooseEduStart3(eduStart3Val)
    chooseEduEnd3(eduEnd3Val)
    setUni3ValValidate(true);
    setDeg3ValValidate(true);
    setEduStart3ValValidate(true);
    setEduEnd3ValValidate(true);
    } else {
      return 0
    }

  }



function eduInfoClickTotal(){
  eduInfoClick();
  eduInfoClick2();
  eduInfoClick3()
}

{/*WORK-EXPERIENCE-FUNCTIONS*/}
const [company1Val, setCompany1Val] = useState('');
const [job1Val, setJob1Val] = useState('');
const [workStart1Val, setWorkStart1Val] = useState('');
const [workEnd1Val, setWorkEnd1Val] = useState('')
const [company1ValValidate, setCompany1ValValidate] = useState(true);
const [job1ValValidate, setJob1ValValidate] = useState(true);
const [workStart1ValValidate, setWorkStart1ValValidate] = useState(true);
const [workEnd1ValValidate, setWorkEnd1ValValidate] = useState(true)

const handleChangeCompany1 = (event )=> {
    setCompany1Val(event.target.value);
};
const handleChangeJob1 = (event )=> {
  setJob1Val(event.target.value);
};
const handleChangeWorkStart1 = (event) => {
  setWorkStart1Val(event.target.value)
}
const handleChangeWorkEnd1 = (event) => {
  setWorkEnd1Val(event.target.value)
}


function workInfoClick(){
  if(job1Val.length > '1'){
    setJob1ValValidate(true);
  }else {
    setJob1ValValidate(false);
  }

  if(company1Val.length > '5'){
    setCompany1ValValidate(true);
  }else {
    setCompany1ValValidate(false);
  }

  if(workStart1Val > '1960' && workStart1Val > '1960') {
    setWorkStart1ValValidate(true);
  }else {
    setWorkStart1ValValidate(false);
  }

  if(workEnd1Val > '1960' && workEnd1Val < '2006'){
    setWorkEnd1ValValidate(true);
  }else {
    setWorkEnd1ValValidate(false);
  }

  if(job1Val.length > '1' && company1Val.length > '5' && (workStart1Val > '1960' && workStart1Val > '1960') && (workEnd1Val > '1960' && workEnd1Val < '2006')){
    chooseCompany1(company1Val),
    chooseJob1(job1Val),
    chooseWorkStart1(workStart1Val),
    chooseWorkEnd1(workEnd1Val)
    setCompany1ValValidate(true);
    setJob1ValValidate(true);
    setWorkStart1ValValidate(true);
    setWorkEnd1ValValidate(true);
    } else {
      return 0
    }

  }



{/*WORK-EXPERIENCE-2-FUNCTIONS*/}
const [company2Val, setCompany2Val] = useState('');
const [job2Val, setJob2Val] = useState('');
const [workStart2Val, setWorkStart2Val] = useState('');
const [workEnd2Val, setWorkEnd2Val] = useState('');
const [company2ValValidate, setCompany2ValValidate] = useState(true);
const [job2ValValidate, setJob2ValValidate] = useState(true);
const [workStart2ValValidate, setWorkStart2ValValidate] = useState(true);
const [workEnd2ValValidate, setWorkEnd2ValValidate] = useState(true)

const handleChangeCompany2 = (event )=> {
    setCompany2Val(event.target.value);
};
const handleChangeJob2 = (event )=> {
  setJob2Val(event.target.value);
};
const handleChangeWorkStart2 = (event) => {
  setWorkStart2Val(event.target.value)
}
const handleChangeWorkEnd2 = (event) => {
  setWorkEnd2Val(event.target.value)
}



function workInfoClick2(){
  if(job2Val.length > '1'){
    setJob2ValValidate(true);
  }else {
    setJob2ValValidate(false);
  }

  if(company2Val.length > '5'){
    setCompany2ValValidate(true);
  }else {
    setCompany2ValValidate(false);
  }

  if(workStart2Val > '1960' && workStart2Val < '2006') {
    setWorkStart2ValValidate(true);
  }else {
    setWorkStart2ValValidate(false);
  }

  if(workEnd2Val > '1960' && workEnd2Val < '2006'){
    setWorkEnd2ValValidate(true);
  }else {
    setWorkEnd2ValValidate(false);
  }

  if(job2Val.length > '1' && company2Val.length > '5' && (workStart2Val > '1960' && workStart2Val < '2006') && (workEnd2Val > '1960' && workEnd2Val < '2006')){
    chooseCompany2(company2Val),
    chooseJob2(job2Val),
    chooseWorkStart2(workStart2Val),
    chooseWorkEnd2(workEnd2Val)
    setCompany2ValValidate(true);
    setJob2ValValidate(true);
    setWorkStart2ValValidate(true);
    setWorkEnd2ValValidate(true);
    } else {
      return 0
    }

  }


{/*WORK-EXPERIENCE-3-FUNCTIONS*/}
const [company3Val, setCompany3Val] = useState('');
const [job3Val, setJob3Val] = useState('');
const [workStart3Val, setWorkStart3Val] = useState('');
const [workEnd3Val, setWorkEnd3Val] = useState('');
const [company3ValValidate, setCompany3ValValidate] = useState(true);
const [job3ValValidate, setJob3ValValidate] = useState(true);
const [workStart3ValValidate, setWorkStart3ValValidate] = useState(true);
const [workEnd3ValValidate, setWorkEnd3ValValidate] = useState(true)

const handleChangeCompany3 = (event )=> {
    setCompany3Val(event.target.value);
};
const handleChangeJob3 = (event )=> {
  setJob3Val(event.target.value);
};
const handleChangeWorkStart3 = (event) => {
  setWorkStart3Val(event.target.value)
}
const handleChangeWorkEnd3 = (event) => {
  setWorkEnd3Val(event.target.value)
}

function workInfoClick3(){
  if(job3Val.length > '1'){
    setJob3ValValidate(true);
  }else {
    setJob3ValValidate(false);
  }

  if(company3Val.length > '5'){
    setCompany3ValValidate(true);
  }else {
    setCompany3ValValidate(false);
  }

  if(workStart3Val > '1960' && workStart3Val > '1960') {
    setWorkStart3ValValidate(true);
  }else {
    setWorkStart3ValValidate(false);
  }

  if(workEnd3Val > '1960' && workEnd3Val < '2006'){
    setWorkEnd3ValValidate(true);
  }else {
    setWorkEnd3ValValidate(false);
  }

  if(job3Val.length > '1' && company3Val.length > '5' && (workStart3Val > '1960' && workStart3Val > '1960') && (workEnd3Val > '1960' && workEnd3Val < '2006')){
    chooseCompany3(company3Val),
    chooseJob3(job3Val),
    chooseWorkStart3(workStart3Val),
    chooseWorkEnd3(workEnd3Val)
    setCompany3ValValidate(true);
    setJob3ValValidate(true);
    setWorkStart3ValValidate(true);
    setWorkEnd3ValValidate(true);
    } else {
      return 0
    }

  }

  function workInfoClickTotal(){
    workInfoClick();
    workInfoClick2();
    workInfoClick3();
  }


{/*TECHNICAL-SKILL-FUNCTIONS*/}



const handleChangeSkill = (event )=> {
    setSkill1Val(event.target.value);
};

const [skill1Val, setSkill1Val] = useState(['']);
/*
function skillInfoClick(){
  chooseTechnicalSkill(skill1Val)
  console.log(skill1Val)
}

*/
const [isInputFocused, setIsInputFocused] = useState(false);
const [tags, setTags] = useState([]);
const inputRef = useRef(null);
const [limit, setLimit] = useState(false)

let warahey = [];



const TagsInput =() => {


   
  const removeTags = indexToRemove => {
    setTags(prevTags => {
      const updatedTags = [...prevTags.filter((_, index) => index !== indexToRemove)];
      console.log(updatedTags);
      warahey = updatedTags;
      chooseTechnicalSkill(warahey)
      return warahey;
    });
    setLimit(false);
  };

       const addTags = (event) => {
        if(tags.length < 17){ 
        if (event.target.value.trim() !== '') {
          const newTag = event.target.value.trim();
          setTags((prevTags) => {
            const updatedTags = [...prevTags, newTag];
            warahey = updatedTags
            event.target.value = '';
            console.log('Tags after adding:', warahey);
            
            chooseTechnicalSkill(warahey)
            return warahey;
          });
          inputRef.current.focus(); // Set focus on the input
          setIsInputFocused(false);
        }
      } else {
        setLimit(true);
      }
      };

      const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addTags(e);
        }
      };
      
    
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', height: '150px', width: '100%' }}>
          <div className='tags-input'>
            <ul>
              {tags.map((tag, index) => (
                <li key={index} className='tag'>
                  <span>{tag}</span>
                  <i className='tag-close-icon material-icons' onClick={() => removeTags(index)}>
                    close
                  </i>
                </li>
              ))}
            </ul>
          </div>
          <input
            type='text'
            placeholder='Press enter to add tags'
            style={{ width: '100%', margin: '0px' }}
            className='skills-input'
            onKeyDown={handleKeyUp}
            ref={inputRef}
            onFocus={() => setIsInputFocused(true)}
            autoFocus={isInputFocused}
            maxLength={16}
          />
        </div>
      );

    };
let basicInfoHeight = '727px';
let contactInfoHeight = '555px';
let education1BackgroundHeight = '600px';
let education1and2BackgroundHeight = '1215px';
let education1and2and3BackgroundHeight = '1828px';
let work1ExperienceHeight = '600px';
let work1and2ExperienceHeight = '1215px';
let work1and2and3ExperienceHeight = '1828px';
let skills1Height = '220px';
let addRemove = '14pt';
let settingsWidtha = '480px';
let wara = 'column';

const updateSettingsWidth = () => {

if (window.innerWidth < 1430 && window.innerWidth > 1120) {
basicInfoHeight = '670px';
contactInfoHeight = '480px';
education1BackgroundHeight = '510px';
education1and2BackgroundHeight = '995px';
education1and2and3BackgroundHeight = '1497px';
work1ExperienceHeight = '510px';
work1and2ExperienceHeight = '995px';
work1and2and3ExperienceHeight = '1497px';
settingsWidtha = '405px';
} else if (window.innerWidth < 1120 && window.innerWidth > 450){
  basicInfoHeight = '670px';
contactInfoHeight = '480px';
education1BackgroundHeight = '510px';
education1and2BackgroundHeight = '995px';
education1and2and3BackgroundHeight = '1497px';
work1ExperienceHeight = '510px';
work1and2ExperienceHeight = '995px';
work1and2and3ExperienceHeight = '1497px';
settingsWidtha = '405px';
  wara ='row';
} else if (window.innerWidth < 450){
  settingsWidtha = '270px';
  basicInfoHeight = '646px';
  contactInfoHeight = '456px';
  education1BackgroundHeight = '486px';
  education1and2BackgroundHeight = '986px';
  education1and2and3BackgroundHeight = '1476px';
  work1ExperienceHeight = '486px';
  work1and2ExperienceHeight = '986px';
  work1and2and3ExperienceHeight = '1476px';
  skills1Height = '243px';
  addRemove = '11pt';
}
/*
console.log('Updated settingsWidtha:', settingsWidtha);*/
};

const handleResize = () => {
  // Call the function to update settingsWidtha
  updateSettingsWidth();
  // Log the window width for debugging
  //console.log('Window width:', window.innerWidth);
  // Force a re-render by updating state or forceUpdate if necessary
  // For example: setForceUpdate(prev => !prev);
};

// Initial call to set the initial values
updateSettingsWidth();

// Add event listener for window resize
window.addEventListener('resize', handleResize);




    return (
      <>
        <div className="settings">
  <div style={{
          height: isBasic ? basicInfoHeight : isContact ? contactInfoHeight : isEducation3 && isEducation2 && isEducation ? education1and2and3BackgroundHeight : isEducation2 && isEducation ? education1and2BackgroundHeight : isEducation3 && isEducation ?  education1and2BackgroundHeight : isEducation ? education1BackgroundHeight : isWork3 && isWork2 && isWork ? work1and2and3ExperienceHeight : isWork2 && isWork ? work1and2ExperienceHeight : isWork3 && isWork ? work1and2ExperienceHeight : isWork ? work1ExperienceHeight : isSkills ? skills1Height : '44px',
          marginBottom: isActive ? '20px' : '0px',
          border: isBasic ? '#4065af solid 2pt' : isContact ? '#4065af solid 2pt' : isEducation ? '#4065af solid 2pt' : isWork ? '#4065af solid 2pt' : isSkills ? '#4065af solid 2pt' : 'none',
        }}
         onMouseOver={changeColor} onMouseOut={changeColor}>
  <h4 onClick={openSetting} style={{paddingTop: isActive ? '0.5px' : '2px', paddingLeft: isActive ? '4.5px' : '6px'}}>
            {setting.subject}
            <img src={setting.url} style={{ pointerEvents:'none', display: isHovered ? 'flex' : 'none', rotate: isActive ? '90deg' : '0deg', paddingTop: isActive ? '12px' : '7px', paddingRight: isActive ? '1px' : '8px'}}>
              </img>
              </h4>

               {/*BASIC-INFO*/}
              <div style={{display: isBasic ? 'flex' : 'none'}}>
              <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between', height:'625px', flexDirection:'column'}}>
              <div className='wara-class' style={{display:'flex', flexDirection: 'column', width: settingsWidtha}}>
        <div  style={{display: 'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'column'}}>
    <h5>first and last name</h5>
    <input placeholder={'FIRST AND LAST NAME'} onChange={handleChangeFullName} maxLength={'40'}/>
    <span style={{color: fullNameValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>age</h5>
    <input placeholder={'00'} onChange={handleChangeAge} type={"number"} onInput={(e) => e.target.value = e.target.value.slice(0, 2)}/>
    <span style={{color: ageValValidate ? 'transparent' : '#f13535'}}>minimum 18 years old</span>
    </div>
    </div>
    <div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>professional title</h5>
    <input placeholder={'profession'} onChange={handleProfession} maxLength={'40'}/>
    <span style={{color: professionValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>summary about yourself</h5>
    <textarea placeholder={'tell us about yourself...'} onChange={handleSummary} style={{height: '210px', overflowWrap: 'break-word', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 1px solid", fontSize: addRemove, color:'white' }} maxLength={'400'}></textarea>
    <span style={{color: summaryValValidate ? 'transparent' : '#f13535'}}>minimum 30 characters</span>
    </div>
    </div>
    </div>
              <button onClick={() => basicInfoClick()}>submit</button>
              </div>
              </div>
              <div style={{display: isContact ? 'flex' : 'none'}}>

  {/*CONTACT-INFO*/}
  <div className='contact-info-class' style={{display: 'flex', alignItems:'center', justifyContent:'space-between', height:'435px', flexDirection:'column'}}>
        <div style={{display:'flex', flexDirection:'column', width: settingsWidtha}}>
        <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>phone</h5>
    <input placeholder={'dont forget the country and/or area code'} onChange={handleChangePhone} maxLength={'30'} type={'number'}/>
    <span style={{color: phoneValValidate ? 'transparent' : '#f13535'}}>minimum 5 characters</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>email</h5>
    <input placeholder={'ex: johndoe@gmail.com'} onChange={handleChangeEmail} maxLength={'30'}/>
    <span style={{color: emailValValidate ? 'transparent' : '#f13535'}}>not a valid email</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>location</h5>
    <input placeholder={'where do you live?'} onChange={handleChangeLocation} maxLength={'30'} />
    <span style={{color: locationValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>website</h5>
    <input placeholder={'www.yourwebsite.com'} onChange={handleChangeWebsite} maxLength={'30'} />
    <span style={{color: websiteValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    </div>
    <button onClick={() => contactInfoClick()}>submit</button>
    </div>
              </div>
              <div style={{display: isEducation ? 'flex' : 'none'}}>
                {/*EDUCATION-BACKGROUND*/}
                <div className='education-background-class' style={{display: 'flex', alignItems:'center', justifyContent:'space-between', height:'465px', flexDirection:'column'}}>
        <div style={{display:'flex', flexDirection:'column', width: settingsWidtha}}>
        <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>university/institution</h5>
    <input placeholder={'university/institution'} onChange={handleChangeUni1} maxLength={'60'}/>
    <span style={{color: uni1ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>degree/certificate/program</h5>
    <input placeholder={'degree'} onChange={handleChangeDeg1} maxLength={'60'}/>
    <span style={{color: deg1ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>starting date</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeEduStart1} onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: eduStart1ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>graduation</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeEduEnd1} min='1970' max='2004' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: eduEnd1ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>

    {/*add-more-1*/}
    <div className='education-background-class' style={{display: isEducation2 ? 'flex' : 'none', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center', width:'90%' }}>
    <h6 onClick={() => openEdu2()} style={{fontSize: addRemove, color:'#4065af', cursor:'pointer'}}>remove</h6>
    </div>
    </div>
    <h5>university/institution</h5>
    <input placeholder={'university/institution'} onChange={handleChangeUni2} maxLength={'60'}/>
    <span style={{color: uni2ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: isEducation2 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>degree/certificate/program</h5>
    <input placeholder={'degree'} onChange={handleChangeDeg2} maxLength={'60'}/>
    <span style={{color:deg2ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display:  isEducation2 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>starting date</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeEduStart2} type='number' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: eduStart2ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>
    <div style={{display: isEducation2 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>graduation</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeEduEnd2} min='1970' max='2004' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: eduEnd2ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>

    {/*add-more-2*/}

    <div className='education-background-class' style={{display: isEducation3 ? 'flex' : 'none', flexDirection:'column'}}>
    <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
<div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center', width:'90%' }}>
    <h6 onClick={() => openEdu3()} style={{fontSize: addRemove, color:'#4065af', cursor:'pointer'}}>remove</h6>
    </div>
    </div>
    <h5>university/institution</h5>
    <input placeholder={'university/institution'} onChange={handleChangeUni3} maxLength={'60'}/>
    <span style={{color: uni3ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: isEducation3 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>degree/certificate/program</h5>
    <input placeholder={'degree'} onChange={handleChangeDeg3} maxLength={'60'}/>
    <span style={{color:deg3ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: isEducation3 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>starting date</h5>
    <input  placeholder={'dd/mm/yyyy'} onChange={handleChangeEduStart3} type='number' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color:eduStart3ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>
    <div style={{display: isEducation3 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>graduation</h5>
    <input  placeholder={'dd/mm/yyyy'} onChange={handleChangeEduEnd3} min='1970' max='2004' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: eduEnd3ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>

    </div>
    <h1 onClick={() => openEdu2()} style={{fontFamily:"futuraHeavy", fontWeight: '400', fontSize: addRemove, display: isEducation2 ? 'none' : isEducation3 ? 'flex' : isEducation2 && isEducation3 ? 'none' : 'flex', justifyContent:'flex-end', width:'90%'}}>add more +</h1>
    <h1 onClick={() => openEdu3()} style={{fontFamily:"futuraHeavy", fontWeight: '400', fontSize: addRemove, display: isEducation3 ? 'none' : isEducation2 && isEducation3 ? 'none' : isEducation2 ? 'flex' : 'none', justifyContent:'flex-end', width:'90%'}}>add more +</h1>
    <button onClick={() => eduInfoClickTotal()}style={{marginTop: isEducation && isEducation2 && isEducation3 ? '45px' : '0px' }}>submit</button> 
    </div>
              </div>
              <div style={{display: isWork ? 'flex' : 'none'}}>
                 {/*WORK-EXPERIENCE*/}
                 <div className='work-experience-class' style={{display: 'flex', alignItems:'center', justifyContent:'space-between', height:'465px', flexDirection:'column'}}>
        <div style={{display:'flex', flexDirection:'column', width: settingsWidtha}}>
        <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>title/position</h5>
    <input placeholder={'job title'} onChange={handleChangeJob1}  maxLength={'60'}/>
    <span style={{color: job1ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>company</h5>
    <input placeholder={'company'} onChange={handleChangeCompany1} maxLength={'60'}/>
    <span style={{color: company1ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>starting date</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeWorkStart1} type='number' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: workStart1ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5>graduation</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeWorkEnd1} min='1970' max='2004' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: workEnd1ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>

    {/*add-more-1*/}
    <div className='work-experience-class' style={{display: isWork2 ? 'flex' : 'none', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center', width:'90%' }}>
    <h6 onClick={() => openWork2()} style={{fontSize: addRemove, color:'#4065af', cursor:'pointer'}}>remove</h6>
    </div>
    </div>
    <h5>title/position</h5>
    <input placeholder={'job title'} onChange={handleChangeJob2} maxLength={'60'}/>
    <span style={{color: job2ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: isWork2 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>company</h5>
    <input placeholder={'company'} onChange={handleChangeCompany2} maxLength={'60'}/>
    <span style={{color: company2ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display:  isWork2 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>starting date</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeWorkStart2} type='number' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: workStart2ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>
    <div style={{display: isWork2 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>graduation</h5>
    <input placeholder={'dd/mm/yyyy'} onChange={handleChangeWorkEnd2} onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: workEnd2ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>

    {/*add-more-2*/}

    <div className='work-experience-class' style={{display: isWork3 ? 'flex' : 'none', flexDirection:'column'}}>
    <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
<div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center', width:'90%' }}>
    <h6 onClick={() => openWork3()} style={{fontSize: addRemove, color:'#4065af', cursor:'pointer'}}>remove</h6>
    </div>
    </div>
    <h5>title/profession</h5>
    <input placeholder={'job title'} onChange={handleChangeJob3}  maxLength={'60'}/>
    <span style={{color: job3ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: isWork3 ? 'flex' : 'none', flexDirection:'column'}}>

    <h5>company</h5>
    <input placeholder={'company'} onChange={handleChangeCompany3} maxLength={'60'}/>
    <span style={{color: company3ValValidate ? 'transparent' : '#f13535'}}>minimum 1 character</span>
    </div>
    <div style={{display: isWork3 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>starting date</h5>
    <input  placeholder={'dd/mm/yyyy'} onChange={handleChangeWorkStart3} type='number' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: workStart3ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>
    <div style={{display: isWork3 ? 'flex' : 'none', flexDirection:'column'}}>
    <h5>graduation</h5>
    <input  placeholder={'dd/mm/yyyy'} onChange={handleChangeWorkEnd3} min='1970' max='2004' onInput={(e) => e.target.value = e.target.value.slice(0, 4)}/>
    <span style={{color: workEnd3ValValidate ? 'transparent' : '#f13535'}}>not a valid date format</span>
    </div>

    </div>
    <h1 onClick={() => openWork2()} style={{fontFamily:"futuraHeavy", fontWeight: '400', fontSize:  addRemove, display: isWork2 ? 'none' : isWork3 ? 'flex' : isWork2 && isWork3 ? 'none' : 'flex', justifyContent:'flex-end', width:'90%'}}>add more +</h1>
    <h1 onClick={() => openWork3()} style={{fontFamily:"futuraHeavy", fontWeight: '400', fontSize:  addRemove, display: isWork3 ? 'none' : isWork2 && isWork3 ? 'none' : isWork2 ? 'flex' : 'none', justifyContent:'flex-end', width:'90%'}}>add more +</h1>
    <button onClick={() => workInfoClickTotal()} style={{marginTop: isWork && isWork2 && isWork3 ? '45px' : '0px' }}>submit</button> 
    </div>
              </div>
              <div style={{display: isSkills ? 'flex' : 'none'}}>
                {/*TECHNICAL-SKILLS*/}
                <div className='technical-skills-class' style={{display: 'flex', alignItems:'center', justifyContent:'space-between', height:'120px', flexDirection:'column', width:'100%'}}>
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center', width: settingsWidtha}}>
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', width:'90%'}}>
    <TagsInput />
    <span style={{display: 'flex', width:'100%', justifyContent: 'flex-start', marginLeft:'0', color: limit ? '#f13535' : 'transparent'}}>the limit number of skills is 16</span>


    
</div>
</div>
</div>
              </div>
  </div>
</div>
</>
    )
}

console.log(window.innerWidth)