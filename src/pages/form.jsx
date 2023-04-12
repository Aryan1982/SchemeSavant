import Form from 'react-bootstrap/Form';
import React,{ useState } from 'react';
import './form.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SchemesDo from "../schemesdo.jfif"
import FilteredSchemesSectors from "./FilteredSchemesSectors"

const FormPage=()=>{
    const [formcount,setFormcount]=useState(0);
    const [selectedAge,setSelectedAge]=useState("0");
    const [selectedGender,setSelectedGender]=useState("0");
    const [state,setState]= useState();
    const [area,setArea]= useState("0");
    const [selectedIncome, setSelectedIncome] = useState("0");
    const [caste, setCaste] = useState("0");
    const [isStudent,setIsStudent] = useState("0");
    const [isDissabled,setIsDissabled] = useState("0");

    const handleAgeChange = (event)=>{
      setSelectedAge(event.target.value);
    }

    const handleGenderChange = (event)=>{
      // alert(event.target.value)
      setSelectedGender(event.target.value);
    }

    const Goforward=(event)=>{
      event.preventDefault()
      if(selectedAge !=="0" && selectedGender !=="0"){
        setFormcount(formcount+1);
      }
      else{
        toast("Please fill all the fields");
      }
    }

    return(
        <div className="formpage">
        <ToastContainer/>
          {formcount<4?<ProgressBar animated now={formcount*25}  style={{width:"200px",textAlign:"center"}}/>:null}
          {formcount<4?<p>help us find best schemes for you</p>:null}
          {formcount>=4?<button className="mb-2 btns" onClick={()=>setFormcount(formcount-1)}>BACK</button>:null}
        {formcount<4?<div className="form">
                  
                {/* <h1 style={{textAlign:'center', marginTop:"0px", marginBottom:"30px"}}>LOGIN</h1> */}
              {formcount===0?<form >
                
                <p>Please select your gender</p>
                <Form.Select aria-label="select caste" 
                  value={selectedGender} 
                  onChange={handleGenderChange} 
                   required as="select" type="select"
                  >
                  <option value="0">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  </Form.Select>
        
                  <p>Please select your age</p>
                  <Form.Select aria-label="select caste" value={selectedAge} onChange={handleAgeChange}>
                  <option value="0">Select age</option>
                  <option value="18">18-40</option>
                  <option value="40">40-60</option>
                  <option value="60">more than 60</option>
                  </Form.Select>
                <br/><br/>
                <div>
                {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
                <button onClick={Goforward}>NEXT</button>
                </div>
                
              </form>:null}
              {formcount===1?<form >
                <p>Please select your state</p>
                <Form.Select aria-label="select caste" 
                  value={state} 
                  onChange={(e)=>setState(e.target.value)} 
                  >
                  <option value="0">Select Your state</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="rajasthan">Rajasthan</option>
                  </Form.Select>
        
                  <p>Please select your area of residence</p>
                  <Form.Select aria-label="select caste" value={area} onChange={(e)=>setArea(e.target.value)}>
                  <option value="0">Select your area of residence</option>
                  <option value="rural">Rural</option>
                  <option value="urban">Urban</option>
                  {/* <option value="3">more than 60</option> */}
                  </Form.Select>
                <br/><br/>
                <div>
                {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
                <button onClick={()=>{setFormcount(formcount-1)}}>BACK</button>
                <button onClick={(e)=>{e.preventDefault() ;if(state !=="0" && area !=="0"){Goforward(e)}else{toast("Please fill all the fields")}}}>NEXT</button>
                </div>
                
              </form>:null}
        
              {formcount===2?<form >
                <p>You belong to...</p>
                <Form.Select aria-label="select caste" 
                  value={caste} 
                  onChange={(e)=>setCaste(e.target.value)} 
                  >
                  <option value="0">Select your caste</option>
                  <option value="general">General</option>
                  <option value="obc">Other Backward Class (OBC)</option>
                  <option value="pvtg">Particularly Vulnerable Tribal Group (PVTG)</option>
                  <option value="sc">Scheduled Caste (SC)</option>
                  <option value="st">Scheduled Tribe (ST)</option>         
                  </Form.Select>
        
                  <p>Please select your yearly income</p>
                  <Form.Select aria-label="select caste" value={selectedIncome} onChange={(e)=>setSelectedIncome(e.target.value)}>
                  <option value="0">Select your income</option>
                  <option value="50000">upto 50000</option>
                  <option value="100000">upto 100000</option>
                  <option value="110000">more than 100000</option> 
                  </Form.Select>
                <br/><br/>
                <div>
                {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
                <button onClick={()=>setFormcount(formcount-1)}>BACK</button>
                <button onClick={(e)=>{e.preventDefault();if(caste !=="0" && selectedIncome !=="0"){Goforward(e)}else{toast("Please fill all the fields")}}}>NEXT</button>
                </div>
                
              </form>:null}
        
              {formcount===3?<form >
                <p>Are you a student</p>
                <Form.Select aria-label="select caste" 
                  value={isStudent} 
                  onChange={(e)=>setIsStudent(e.target.value)} 
                  >
                  <option value="0">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">NO</option>
                       
                  </Form.Select>
        
                  <p>Are you dissabled</p>
                  <Form.Select aria-label="select caste" value={isDissabled} onChange={(e)=>setIsDissabled(e.target.value)}>
                  <option value="0">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  {/* <option value="3">more than 60</option> */}
                  </Form.Select>
                <br/><br/>
                <div>
                {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
                <button className="btns" onClick={()=>setFormcount(formcount-1)} style={{borderRadius: "5px"}}>BACK</button>
                <button className="btns" onClick={(e)=>{e.preventDefault();if(isStudent !=="0" && isDissabled !=="0"){Goforward(e)}else{toast("Please fill all the fields")}}} style={{marginLeft:"9px", borderRadius:"5px"}}>SUBMIT</button>
                </div>
                
              </form>:null}
        
              
              </div>:null}
      {formcount===4? <FilteredSchemesSectors 
                    formcount={setFormcount} 
                    selectedGender = {selectedGender}
                    state={state}
                    area={area}
                    selectedIncome={selectedIncome}
                    caste={caste}
                    isStudent={isStudent}
                    isDissabled={isDissabled}/> : null}
      </div>
    )
}

export default FormPage;
{/*<img src={SchemesDo} alt="schemes do"/>*/}