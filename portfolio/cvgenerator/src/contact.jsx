export default function ContactInformation(){
    return(
        <>
        <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between', height:'475px', flexDirection:'column'}}>
        <div style={{display:'flex', flexDirection:'column', width:'500px'}}>
        <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>email</h5>
    <input className="wara"style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white'}}/>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>phone</h5>
    <input style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white'}}/>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>location</h5>
    <input style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white'}}/>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <h5 style={{marginLeft:'5%', marginBottom:'4px'}}>website</h5>
    <input style={{height: '50px', marginLeft:'5%', marginRight:'5%', backgroundColor:'transparent', border: "white 2px solid", fontSize:'14pt', color:'white'}}/>
    </div>
    </div>
    <button style={{backgroundColor: "#4065af", width: '100px', borderRadius: '0'}}>submit</button>
    </div>
    </>)
}
