import Form from 'react-bootstrap/Form';
import React,{ useState } from 'react';
import './form.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const FormPage=()=>{
    const [formcount,setFormcount]=useState(0);
    const [selectedAge,setSelectedAge]=useState();
    const [selectedGender,setSelectedGender]=useState();
    const [counter,setCounter] = useState(0);
    const [state,setState]= useState('');
    const [area,setArea]= useState('');
    const [selectedIncome, setSelectedIncome] = useState();
    const [caste, setCaste] = useState('');
    const [isStudent,setIsStudent] = useState();
    const [isDissabled,setIsDissabled] = useState();

    const handleAgeChange = (event)=>{
      setSelectedAge(event.target.value);
    }

    const handleGenderChange = (event)=>{
      // alert(event.target.value)
      setSelectedGender(event.target.value);
    }

    const Goforward=(event)=>{
      event.preventDefault()

      if(selectedAge && selectedGender !=0){
        setFormcount(formcount+1);
      }
      else{
        toast("Please fill all the fields");
      }
    }

    return(
        <div className="formpage">
        <ToastContainer/>
          <ProgressBar animated now={formcount*25}  style={{width:"200px",textAlign:"center"}}/>
          <p>help us find best schemes for you</p>
        <div className="form">
          
        {/* <h1 style={{textAlign:'center', marginTop:"0px", marginBottom:"30px"}}>LOGIN</h1> */}
      {formcount===0?<form >
        
        <p>Please select your gender</p>
        <Form.Select aria-label="select caste" 
          value={selectedGender} 
          onChange={handleGenderChange} 
           required as="select" type="select"
          >
          <option value="0">Select Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
          </Form.Select>

          <p>Please select your age</p>
          <Form.Select aria-label="select caste" value={selectedAge} onChange={handleAgeChange}>
          <option value="0">Select age</option>
          <option value="1">18-40</option>
          <option value="2">40-60</option>
          <option value="3">more than 60</option>
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
          <option value="1">Gujarat</option>
          <option value="2">Maharashtra</option>
          <option value="3">Rajasthan</option>
          </Form.Select>

          <p>Please select your area of residence</p>
          <Form.Select aria-label="select caste" value={area} onChange={(e)=>setArea(e.target.value)}>
          <option value="0">Select your area of residence</option>
          <option value="1">Rural</option>
          <option value="2">Urban</option>
          {/* <option value="3">more than 60</option> */}
          </Form.Select>
        <br/><br/>
        <div>
        {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
        <button onClick={()=>setFormcount(formcount-1)}>BACK</button>
        <button onClick={Goforward}>NEXT</button>
        </div>
        
      </form>:null}

      {formcount===2?<form >
        <p>You belong to...</p>
        <Form.Select aria-label="select caste" 
          value={caste} 
          onChange={(e)=>setCaste(e.target.value)} 
          >
          <option>Select your caste</option>
          <option value="1">General</option>
          <option value="2">Other Backward Class (OBC)</option>
          <option value="3">Particularly Vulnerable Tribal Group (PVTG)</option>
          <option value="4">Scheduled Caste (SC)</option>
          <option value="5">Scheduled Tribe (ST)</option>         
          </Form.Select>

          <p>Please select your yearly income</p>
          <Form.Select aria-label="select caste" value={selectedIncome} onChange={(e)=>setSelectedIncome(e.target.value)}>
          <option>Select your income</option>
          <option value="1">upto 50000</option>
          <option value="2">upto 100000</option>
          <option value="3">more than 100000</option> 
          </Form.Select>
        <br/><br/>
        <div>
        {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
        <button onClick={()=>setFormcount(formcount-1)}>BACK</button>
        <button onClick={Goforward}>NEXT</button>
        </div>
        
      </form>:null}

      {formcount===3?<form >
        <p>Are you a student</p>
        <Form.Select aria-label="select caste" 
          value={isStudent} 
          onChange={(e)=>setIsStudent(e.target.value)} 
          >
          <option>Select</option>
          <option value="1">Yes</option>
          <option value="2">NO</option>
               
          </Form.Select>

          <p>Are you dissabled</p>
          <Form.Select aria-label="select caste" value={isDissabled} onChange={(e)=>setIsDissabled(e.target.value)}>
          <option>Select</option>
          <option value="1">Yes</option>
          <option value="2">No</option>
          {/* <option value="3">more than 60</option> */}
          </Form.Select>
        <br/><br/>
        <div>
        {/* <input className="submitbtn" type="submit" value="Login"/><br/><br/> */}
        <button onClick={()=>setFormcount(formcount-1)}>BACK</button>
        <button onClick={Goforward}>SUBMIT</button>
        </div>
        
      </form>:null}

      </div>
      </div>
    )
}

export default FormPage;