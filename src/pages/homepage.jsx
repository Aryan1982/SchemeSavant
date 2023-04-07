// import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import FormPage from "./form"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
const schemes=[
    {
        name:"firstScheme",
        content:"bla bla",
        age:19,
        min_income:15000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
        caste:"st"
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:50000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
        caste:"general"
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:15000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
        caste:"st"
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:45000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
        caste:"general"
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:15000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
        caste:"st"
    },
    {
        name:"ThirdScheme",
        content:"bla bla",
        age:22,
        min_income:5000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
        caste:"obc"
    },
    {
        name:"FourthScheme",
        content:"bla bla",
        age:50,
        min_income:15000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
        caste:"sc"
    }
]

const Homepage=()=>{
    const [selectedIncome, setSelectedIncome] = useState('');
    const [selectedCaste, setSelectedCaste] = useState('');
    const [selectedAge,setSelectedAge]=useState()
    let filteredSchemes = schemes;

    
    if (selectedIncome === '1') {
      filteredSchemes = filteredSchemes.filter(scheme => scheme.min_income >= 10000);
      // alert("done")
    } else if (selectedIncome === '2') {
      filteredSchemes = filteredSchemes.filter(scheme => scheme.min_income >= 50000);
    } else if (selectedIncome === '3') {
      filteredSchemes = filteredSchemes.filter(scheme => scheme.min_income >= 100000);
    } else if (selectedIncome === '4') {
      filteredSchemes = filteredSchemes.filter(scheme => scheme.min_income >= 100000);
    }

    if (selectedAge === '1') {
      filteredSchemes = filteredSchemes.filter(scheme => scheme.age < 40 );
      // alert("done")
    } else if (selectedAge === '2') {
      filteredSchemes = filteredSchemes.filter(scheme => scheme.age < 60);
    } else if (selectedAge === '3') {
      filteredSchemes = filteredSchemes.filter(scheme => scheme.age < 100);
    } 

    if (selectedCaste === '1') {
            filteredSchemes = filteredSchemes.filter(scheme => scheme.caste === "general");
            // alert("done")
          } else if (selectedCaste === '2') {
            filteredSchemes = filteredSchemes.filter(scheme => scheme.caste === "obc");
          } else if (selectedCaste === '3') {
            filteredSchemes = filteredSchemes.filter(scheme => scheme.caste === "sc");
          } else if (selectedCaste === '4') {
            filteredSchemes = filteredSchemes.filter(scheme => scheme.caste === "st");
          }

      const handleAgeChange = (event)=>{
        setSelectedAge(event.target.value);
      }
      const handleIncomeChange = (event)=>{
        setSelectedIncome(event.target.value);
      }
      const handleCasteChange = (event) => {
        setSelectedCaste(event.target.value);
        // alert(selectedCaste);
        
      }
    return(
        <div className="d-flex flex-column align-items-center">
          
          <FormPage/>          
        </div>
    )
}

export default Homepage;


// {/* <Container className="m-auto">
// {/* <Form.Check 
//  type="checkbox"
//  id={`default-checkbox`}
//  label={"age>40"}
//  // checked={isChecked}
//  onClick={handleCheckboxChange}
// /> */}
// <Form.Select aria-label="select caste" value={selectedAge} onChange={handleAgeChange} className="mt-2">
//  <option>Select age</option>
//  <option value="1">18-40</option>
//  <option value="2">40-60</option>
//  <option value="3">more than 60</option>
//  </Form.Select>

//  <Form.Select aria-label="select caste" value={selectedIncome} onChange={handleIncomeChange} className="mt-2">
//  <option>Select Income</option>
//  <option value="1">0-10000</option>
//  <option value="2">10000-50000</option>
//  <option value="3">50000-100000</option>
//  <option value="4">more than 100000</option>
//  {/* <option value="5">Other</option> */}
//  </Form.Select>
// {/* <Form.Check 
//  type="checkbox"
//  id={`default-checkbox`}
//  label={"income less than 10000 per anum"}
//  // checked={isChecked}
//  onClick={Incomecheck}
// /> */}
// <Form.Select aria-label="select caste" value={selectedCaste} onChange={handleCasteChange} className="mt-2">
//  <option>Select Caste</option>
//  <option value="1">General</option>
//  <option value="2">OBC</option>
//  <option value="3">SC</option>
//  <option value="4">ST</option>
//  {/* <option value="5">Other</option> */}
//  </Form.Select>
// <Row className="d-flex flex-column align-items-center" >
// {filteredSchemes.length > 0 ? null : <h1 className="text-center mt-3">sorry dont have any schemes for you</h1>}
// {filteredSchemes.map((scheme,i)=>{
//      return(
//          <Card style={{ width: '18rem' }} className="mt-3">
//          <Card.Img variant="top" src={scheme.img} />
//          <Card.Body>
//              <Card.Title>{scheme.name}</Card.Title>
//              <Card.Text>
//              {scheme.content}
//              <p>Income less than {scheme.min_income}</p>
//              <p>Age more than {scheme.age}</p>
//              <p>for caste {scheme.caste.toUpperCase()}</p>
//              </Card.Text>
//              <Button variant="primary" onClick={()=>alert("ruko jara sabar rakho, website develop ho rahi")}>Go somewhere</Button>
//          </Card.Body>
//          </Card>
         
//      )
//  })}


// </Row>
// </Container> */}