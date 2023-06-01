import Card from 'react-bootstrap/Card';
import './App.css'

function Skills() {
  return (
    <div>
    <Card>
      <Card.Body>
        <Card.Title className="title">Skills and Techniques</Card.Title>
        <Card.Text>
        <hr></hr>
          <ul>
            <li>DNA/RNA extraction from medical samples</li>
            <li>DNA/RNA library preparation for metagenomic deep sequencing</li>
            <li>Antibiotic resistance testing by qPCR and Kirby-Bauer test</li>
            <li>Clincial bacterial culture, isolation, and identification</li>
            <li>Scientific writing, editing, and laboratory documentation</li>
            <li>Multi-site research study planning, Internal Review Board approvals, and patient consent.</li>
            <li>Preparation of Informed Consent, Memorandum of Understanding, and University Funded
Research Agreements</li>
            <li>Polyclonal ELISA, slide preparation, staining, and identification of bacterial and parasitic
samples</li>
            <li>CEFR A2-3 French</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Skills;