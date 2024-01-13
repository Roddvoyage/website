export default function TechnicalSkills(){
    return(
    <>
    <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between', height:'230px', flexDirection:'column'}}>
    <div style={{display:'flex', flexDirection:'column', width:'500px'}}>
    <div style={{display: 'flex', flexDirection:'column'}}>
<h5 style={{marginLeft:'5%', marginBottom:'4px'}}>add a skill</h5>
<input className="wara"style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white'}}/>
</div>
</div>
<h1 style={{fontFamily:"futuraHeavy", fontWeight: '400', fontSize: '14pt', display:'flex', justifyContent:'flex-end', width:'90%'}}>add more +</h1>
<button style={{backgroundColor: "#4065af", width: '100px', borderRadius: '0'}}>submit</button>
</div>
</>)
}
