import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import headshot from './images/nicoheadshot.png'
import Education from './EducationCard'
import Experience from './ExperienceCard';
import Publications from './PublicationsCard';
import Skills from './SkillsCard';
import Techniques from './TechniquesCard';
import { useRef } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
const scrollToSkills = useRef(null)
const scrollToTechniques = useRef(null)
const scrollToExperience = useRef(null)
const scrollToEducation = useRef(null)
const scrollToPublications = useRef(null)

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

  return (
    <div  className="App bg">
      <div className="nav-area">
     <NavBar 
     handleScroll={handleScroll}
     scrollToExperience={scrollToExperience}
     scrollToSkills={scrollToSkills}
     scrollToTechniques={scrollToTechniques}
     scrollToEducation={scrollToEducation}
     scrollToPublications={scrollToPublications}
     />
     </div>
     <div className="content ">
      <div className="image-pos">
      <Card fluid className="card-sizing">
      <Card.Img variant="top" src={headshot} />
      <Card.Body>
        <Card.Title>Kevin Ruder</Card.Title>
        <Card.Text>
      Short bio/keywords!
        </Card.Text>
      </Card.Body>
    </Card>
  
     </div>
     <div className="info-area bg">
     <div className="text-area"ref={scrollToSkills}>
     <Skills />
     </div>
     {/* <div className="text-area" ref={scrollToTechniques}>
     <Techniques />
     </div> */}
     <div className="text-area" ref={scrollToExperience}>
     <Experience  />
     </div>
     <div className="text-area" ref={scrollToPublications}>
     <Publications  />
     </div>
     <div className="text-area" ref={scrollToEducation}>
     <Education  />
     </div>
     </div>
     
     
     
     
     
     
     </div>
     
    </div>
  );
}

export default App;
