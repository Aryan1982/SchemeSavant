// import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
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
        min_income:10000,
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
const initialState = {
    schemes: schemes,
    isChecked: false,
  };
const Homepage=()=>{
    const [minAge, setMinAge] = useState(40);
    const [minIncome, setMinIncome] = useState(10000);
    const [isChecked, setIsChecked] = useState(false);
    const [IncomeCheck, setIncomeCheck] = useState(false);
    const [selectedCaste, setSelectedCaste] = useState('');

    let filteredSchemes = schemes;

    if (isChecked) {
        filteredSchemes = schemes.filter(scheme => scheme.age >= minAge);
    }
    if (IncomeCheck) {
        filteredSchemes = schemes.filter(scheme => scheme.min_income <= minIncome);
    }
    if (selectedCaste === '1') {
            filteredSchemes = schemes.filter(scheme => scheme.caste === "general");
            // alert("done")
          } else if (selectedCaste === '2') {
            filteredSchemes = schemes.filter(scheme => scheme.caste === "obc");
          } else if (selectedCaste === '3') {
            filteredSchemes = schemes.filter(scheme => scheme.caste === "sc");
          } else if (selectedCaste === '4') {
            filteredSchemes = schemes.filter(scheme => scheme.caste === "st");
          } else {
            filteredSchemes = schemes;
          }
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
    const Incomecheck = (event) => {
        setIncomeCheck(event.target.checked);
      };
      const handleCasteChange = (event) => {
        setSelectedCaste(event.target.value);
        // alert(selectedCaste);
        
      }
    return(
        <div className="d-flex flex-column justify-content-center">

           <Container className="m-auto">
           <Form.Check 
            type="checkbox"
            id={`default-checkbox`}
            label={"age>40"}
            // checked={isChecked}
            onClick={handleCheckboxChange}
          />
          <Form.Check 
            type="checkbox"
            id={`default-checkbox`}
            label={"income less than 10000 per anum"}
            // checked={isChecked}
            onClick={Incomecheck}
          />
          <Form.Select aria-label="select caste" value={selectedCaste} onChange={handleCasteChange}>
            <option>Select Caste</option>
            <option value="1">General</option>
            <option value="2">OBC</option>
            <option value="3">SC</option>
            <option value="4">ST</option>
            {/* <option value="5">Other</option> */}
            </Form.Select>
      <Row className="d-flex flex-column align-items-center" >
        
        {filteredSchemes.map((scheme,i)=>{
                return(
                    <Card style={{ width: '18rem' }} className="mt-3">
                    <Card.Img variant="top" src={scheme.img} />
                    <Card.Body>
                        <Card.Title>{scheme.name}</Card.Title>
                        <Card.Text>
                        {scheme.content}
                        <p>Income less than {scheme.min_income}</p>
                        <p>Age more than {scheme.age}</p>
                        <p>for caste {scheme.caste.toUpperCase()}</p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    
                )
            })}
       
        
      </Row>
      </Container>
        </div>
    )
}

export default Homepage