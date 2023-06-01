import Card from 'react-bootstrap/Card';
import './App.css'
import cv from './docs/kevin-ruder-cv.pdf'

function Experience() {
  return (
    <div>
    <Card>
      <Card.Body>
        <Card.Title className="title">Experience</Card.Title>
        <Card.Text>
          <div className="title" >
        <a className="download-link" href={cv} download>Download CV</a>
        </div>
        <hr></hr>
          <p><b>Francis I. Proctor Foundation, University of California San Francisco - Heintz Laboratory</b></p>
          <p><em>Study Coordinator/Staff Research Associate 2:</em> Dr. Thuy Doan | August 2019 - Present</p>
          <ul>
            <li>Coordinated multiple international research studies and clinical trials for ocular diseases.</li>
            <li>Worked with international health agencies and physicians to secure governmental and academic
regulatory approval for clinical research studies.</li>
            <li>Obtained Informed Consent from patients to be enrolled in clinical trials and research studies.</li>
            <li>Maintained finances, generated subcontracts, wrote consent forms, in addition to developing
patient database management for projects.</li>
            <li>Prepared DNA/RNA from ocular, nasal, and rectal samples for metagenomic deep sequencing.</li>
            <li>Developed varying protocols for the Heintz Laboratory including macrolide resistance, library
preparation, qPCR, as well as protocols and study design for international sites.</li>
            <li>Trained and managed new lab members, summer interns, and medical students.</li>
          </ul>
          <hr></hr>
          <p><b>Washington Animal Disease Diagnostic Laboratory - Washington State University</b> Pullman, WA</p>
          <p><em>Microbiologist 1:</em>James Thompson | July 2018-July 2019</p>
          <ul>
            <li>Developed ELISA SOP for detection of R. salmoninarum in USFWS specimens.</li>
            <li>Screened and identified bacterial pathogens relating to aquaculture specimens for certification
and diagnostic cases.</li>
            <li>Experienced in tissue processing, slide reading, stain/media/slide preparation and proper
laboratory documentation.</li>
          </ul>
          <hr></hr>
          <p><b>The University of Texas John Ring LaMontagne Center for Infectious Disease</b> Austin, TX</p>
          <p><em>Undergraduate Research Assistant:</em> Dr. Marvin Whiteley | January 2017-August 2017</p>
          <ul>
            <li>Ordered library construction of Pseudomonas putida mutants from transposon mutagenesis for
future experimentation.</li>
            <li>Performed Tn-seq on library of P. putida mutants for screening of unique insertion mutants to test
mutational coverage in the P. putida genome with Cartesian, Pooling-Coordinate Sequencing (CP-
CSeq) of mutants to confirm lack of redundancy.</li>
            <li>Developed a test for biofilm formation of P. putida in soil.</li>
            <li>Performed electroporation of Cherry Red and GFP plasmids into P. putida to examine biofilm
formation and fitness.</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Experience;