import Card from 'react-bootstrap/Card';
import './App.css'


function Education() {
  return (
    <div>
    <Card>
      <Card.Body>
        <Card.Title className="title">Education</Card.Title>
        <Card.Text>
        <hr></hr>
            <p><b>The University of Texas at Austin, </b>Austin, TX.</p>
            <p>Bachelor of Science, Microbiology and Infectious Diseases. May 2018.</p>
            <p><em>Relevant Coursework: </em>Microbiology, Biochemistry, Molecular Biology, Immunology, Human Infectious
Diseases, Clinical Bacteriology</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Education;