import Form from 'react-bootstrap/Form';
import React,{ useState } from 'react';
import './form.css';
import ProgressBar from 'react-bootstrap/ProgressBar'


const FormPage=()=>{
    const [formcount,setFormcount]=useState(0);
    const [selectedAge,setSelectedAge]=useState();
    const [selectedGender,setSelectedGender]=useState();


    const handleAgeChange = (event)=>{
      setSelectedAge(event.target.value);
    }
    const handleGenderChange = (event)=>{
      setSelectedGender(event.target.value);
    }
    return(
        <div className="formpage">
          <ProgressBar animated now={formcount*50}  style={{width:"200px",textAlign:"center"}}/>
          <p>help up find best schemes for you</p>
        <div className="form">
          
        {/* <h1 style={{textAlign:'center', marginTop:"0px", marginBottom:"30px"}}>LOGIN</h1> */}
      {formcount===0?<form >
        
        <p>Please select your gender</p>
        <Form.Select aria-label="select caste" 
          value={selectedGender} 
          onChange={handleGenderChange} 
          >
          <option>Select Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
          </Form.Select>

          <p>Please select your age</p>
          <Form.Select aria-label="select caste" value={selectedAge} onChange={handleAgeChange}>
          <option>Select age</option>
          <option value="1">18-40</option>
          <option value="2">40-60</option>
          <option value="3">more than 60</option>
          </Form.Select>
        <br/><br/>
        <div>
        {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
        <button onClick={()=>setFormcount(formcount+1)}>NEXT</button>
        </div>
        
      </form>:null}
      {formcount===1?<form >
        <p>Please select your state</p>
        <Form.Select aria-label="select caste" 
          value={selectedGender} 
          onChange={handleGenderChange} 
          >
          <option>Select Your state</option>
          <option value="1">Gujarat</option>
          <option value="2">Maharashtra</option>
          <option value="3">Rajasthan</option>
          </Form.Select>

          <p>Please select your area of residence</p>
          <Form.Select aria-label="select caste" value={selectedAge} onChange={handleAgeChange}>
          <option>Select your area of residence</option>
          <option value="1">Rural</option>
          <option value="2">Urban</option>
          {/* <option value="3">more than 60</option> */}
          </Form.Select>
        <br/><br/>
        <div>
        {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
        <button onClick={()=>setFormcount(formcount-1)}>BACK</button>
        <button onClick={()=>setFormcount(formcount+1)}>NEXT</button>
        </div>
        
      </form>:null}

      {formcount===2?<form >
        <p>You belong to...</p>
        <Form.Select aria-label="select caste" 
          value={selectedGender} 
          onChange={handleGenderChange} 
          >
          <option>Select your caste</option>
          <option value="1">General</option>
          <option value="2">Other Backward Class (OBC)</option>
          <option value="3">Particularly Vulnerable Tribal Group (PVTG)</option>
          <option value="4">Scheduled Caste (SC)</option>
          <option value="5">Scheduled Tribe (ST)</option>         
          </Form.Select>

          <p>Please select your area of residence</p>
          <Form.Select aria-label="select caste" value={selectedAge} onChange={handleAgeChange}>
          <option>Select your area of residence</option>
          <option value="1">Rural</option>
          <option value="2">Urban</option>
          {/* <option value="3">more than 60</option> */}
          </Form.Select>
        <br/><br/>
        <div>
        {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
        <button onClick={()=>setFormcount(formcount-1)}>BACK</button>
        <button onClick={()=>setFormcount(formcount+1)}>NEXT</button>
        </div>
        
      </form>:null}

      </div>
      </div>
    )
}

export default FormPage;