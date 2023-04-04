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
        <div className="d-flex flex-column justify-content-center">

           
        </div>
    )
}

export default Homepage