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
import NabiscoCarousel from './CatCarousel';

function App() {
const scrollToSkills = useRef(null)
const scrollToTechniques = useRef(null)
const scrollToExperience = useRef(null)
const scrollToEducation = useRef(null)
const scrollToPublications = useRef(null)
const scrollToCats = useRef(null)
const scrollToTop = useRef(null)

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref,
    left: 0,
    behavior: "smooth",
  });
};

  return (
    <div  className="App bg scrollboy">
      <div className="nav-area"  ref={scrollToTop}>
     <NavBar 
    
     handleScroll={handleScroll}
     scrollToExperience={scrollToExperience}
     scrollToSkills={scrollToSkills}
     scrollToTechniques={scrollToTechniques}
     scrollToEducation={scrollToEducation}
     scrollToPublications={scrollToPublications}
     scrollToCats={scrollToCats}
     scrollToTop={scrollToTop}
     />
     </div>
     <div className="content  ">
      <div className="image-pos">
        <div className="image-size">
      <Image fluid src={headshot}/>
      </div>
    
    <div className="text-area">
    <Card>
     
      <Card.Body >
      <Card.Title className="title">Kevin Ruder</Card.Title>
      <hr></hr>
        <Card.Text >
        I am a medical research study coordinator. I work with clinician scientists at the Proctor Foundation and abroad to design, approve, and execute clinical research studies and trials. I currently work as part of a research team in the Ralph and Sophie Heintz laboratory to recruit and consent participants, obtain ethical approvals, implement contracts, maintain finances, and process data for seven projects with over 45 international sites. In addition, I also participate in the wet laboratory to process samples for deep sequencing and develop new protocols to efficiently identify infectious agents and biomarkers for ocular inflammatory diseases.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
     
     <div className="info-area ">
     <div className="text-area "ref={scrollToSkills}>
     <Skills />
     </div>
     {/* <div className="text-area" ref={scrollToTechniques}>
     <Techniques />
     </div> */}
     <div className="text-area " ref={scrollToExperience}>
     <Experience  />
     </div>
     <div className="text-area " ref={scrollToPublications}>
     <Publications  />
     </div>
     <div className="text-area " ref={scrollToEducation}>
     <Education  />
     </div>
     <div className="cat-area " ref={scrollToCats}>
     <NabiscoCarousel />
     </div>
     <div className="extra-space ">
     <p></p>
     </div>
     </div>
     
     
     
     
     
     
     </div>
     
    </div>
  );
}

export default App;
