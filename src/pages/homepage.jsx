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
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:10000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:15000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:45000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
    },
    {
        name:"SecondScheme",
        content:"bla bla",
        age:40,
        min_income:15000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
    },
    {
        name:"ThirdScheme",
        content:"bla bla",
        age:22,
        min_income:5000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
    },
    {
        name:"FourthScheme",
        content:"bla bla",
        age:50,
        min_income:15000,
        img:"https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg",
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
    let filteredSchemes = schemes;

    if (isChecked) {
        filteredSchemes = schemes.filter(scheme => scheme.age >= minAge);
    }
    if (IncomeCheck) {
        filteredSchemes = schemes.filter(scheme => scheme.min_income <= minIncome);
    }
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
    const Incomecheck = (event) => {
        setIncomeCheck(event.target.checked);
      };
    
    return(
        <div>

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
      <Row className="justify-content-md-center " >
        
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