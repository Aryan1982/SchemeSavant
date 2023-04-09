import Form from 'react-bootstrap/Form';
import './schemes.css';
import React,{useState,useEffect,useRef, useCallback } from "react"
import schemes from "./schemes"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SchemesDo from "../schemesdo.jfif"

const FilteredSchemesSectors=({formcount,selectedGender,state,area,selectedIncome,caste,isStudent,isDissabled})=>{
  const [selectedSector,setSelectedSector]=useState();
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [displayedSchemes, setDisplayedSchemes] = useState([]);
  const [availableSectors, setAvailableSectors] = useState([]);

  const isMountedRef = useRef(false);

  const handleClick=(sector)=>{
    setSelectedSector(sector.sector);
  }

  const filterSchemes = useCallback(() =>{
    const filteredCaste = schemes.filter((scheme) => scheme.caste === caste);
    setFilteredSchemes(filteredCaste);
    const sectors = filteredCaste.reduce((acc, cur) => {
      if (!acc.includes(cur.scheme_sector)) {
        acc.push(cur.scheme_sector);
      }
      return acc;
    }, []);
    setAvailableSectors(sectors);
    // console.log(filteredSchemes,"filteredSchemes")
  },[schemes, caste]);

  useEffect(() => {
    filterSchemes();
  }, [filterSchemes]);

  useEffect(() => {
    const filteredSectors = filteredSchemes.filter((scheme) => scheme.scheme_sector === selectedSector);
    setDisplayedSchemes(filteredSectors);
    // console.log(filteredSchemes,"filteredSectors")
  }, [filteredSchemes, selectedSector]);

    const sectors=[
      {
        sector_name:"Agriculture,Rural & Environment",
        sector:"agriculture"
      },
      {
        sector_name:"Banking,Financial Services and Insurance",
        sector:"banking",
      },
      {
        sector_name:"Business & Entrepreneurship",
        sector:"business",
      },
      {
        sector_name:"Education & Learning",
        sector:"education",
      },
      {
        sector_name:"Health & Wellness",
        sector:"health",
      },
].filter((sector) => availableSectors.includes(sector.sector));
    return(
        <div className='container'>
        {selectedSector?
            <div className="sectordiv">
              {availableSectors.length>0 ? displayedSchemes.map((scheme, index) => (
                 <Card style={{ width: '18rem' }} className="mt-3 mr-5 bg-black text-light " key={index}>
                 <Card.Img variant="top" src={SchemesDo} />
                 <Card.Body>
                     <Card.Title >scheme sector : {scheme.scheme_sector}</Card.Title>
                     <Card.Text>
                     {scheme.about_scheme}
                     <p>for caste {scheme.caste.toUpperCase()}</p>
                     </Card.Text>
                     <Button variant="primary" className="mt-3" onClick={()=>alert("ruko jara sabar rakho, website develop ho rahi")}>Go somewhere</Button>
                 </Card.Body>
                 </Card>
                // <div className="sector">
                // <li key={index}>
                //   <p>Sector: {scheme.scheme_sector}</p>
                // </li>
                // </div>
              )):<h2>no schemes for ya</h2>}
              </div> : sectors.length > 0 ? (
                  sectors.map((sector, id) => (
                    <div className="sector" key={id} onClick={() => handleClick(sector)}>
                      <img className="sectorimg" src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-agriculture-icon-pictures-image_2289925.jpg" alt="sector" />
                      <h3>{sector.sector_name}</h3>
                    </div>
                  ))
                ) : (
                  <h1>no schemes for ya..our team members are finding schemes</h1>
                )}
              </div>
    )
}

export default FilteredSchemesSectors;