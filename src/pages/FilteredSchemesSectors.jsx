import Form from 'react-bootstrap/Form';
import './schemes.css';
import React,{useState,useEffect} from "react"
import schemes from "./schemes"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SchemesDo from "../schemesdo.jfif"

const FilteredSchemesSectors=({formcount})=>{
    const [selectedSector,setSelectedSector]=useState()
    const [filteredSchemes, setFilteredSchemes] = useState([]);

    const handleClick=(sector)=>{
      setSelectedSector(sector.sector)
      formcount++;
      // const filteredSchemes = schemes.filter((scheme) => scheme.scheme_sector === `${selectedSector}`);
      // setFilteredSchemes(filteredSchemes)
    }

    useEffect(() => {
      const filtered = schemes.filter((scheme) => scheme.scheme_sector === selectedSector);
      setFilteredSchemes(filtered);

    },[selectedSector]);

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
]
    return(
        <div>
        {selectedSector?
            <div className="sectordiv">
              {filteredSchemes.length>1 ? filteredSchemes.map((scheme, index) => (
                 <Card style={{ width: '18rem' }} className="mt-3 mr-5 bg-black text-light " key={index}>
                 <Card.Img variant="top" src={SchemesDo} />
                 <Card.Body>
                     <Card.Title >{scheme.scheme_sector}</Card.Title>
                     <Card.Text>
                     {scheme.about_scheme}
                     <p>Income less than {scheme.min_income}</p>
                     <p>Age more than {scheme.min_age}</p>
                     <p>for caste {scheme.caste}</p>
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
            </div>:sectors.map((sector,id)=>{
              return(
                    <div className="sector" key={id} onClick={()=>handleClick(sector)}>
                      <img className="sectorimg" src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-agriculture-icon-pictures-image_2289925.jpg" alt='sector'/>
                      <h3>{sector.sector_name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default FilteredSchemesSectors;