import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import hospitalImage from './path/to/hospital-image.jpg';

const HospitalServices = () => {
  const hospitalServices = [
    {
      id: 1,
      title: 'Emergency Care',
      description: 'Our emergency department is open 24/7 to provide immediate medical attention.'
    },
    {
      id: 2,
      title: 'Outpatient Clinics',
      description: 'We offer a wide range of outpatient clinics, including primary care, specialty care, and rehabilitation services.'
    },
    {
      id: 3,
      title: 'Inpatient Care',
      description: 'Our inpatient facilities provide comprehensive care for patients who require hospitalization.'
    },
    {
      id: 4,
      title: 'Diagnostic Services',
      description: 'We offer a full range of diagnostic services, including imaging, laboratory, and other tests.'
    }
  ];

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={hospitalImage} alt="Menilik Hospital" className="img-fluid" />
          <p className="mt-3">Location: 123 Main Street, Addis Ababa, Ethiopia</p>
        </Col>
        <Col md={6}>
          <h2>Menilik Hospital Services</h2>
          {hospitalServices.map((service) => (
            <Card key={service.id} className="mb-4">
              <CardBody>
                <CardTitle tag="h5">{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
                <Button color="primary">Learn More</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default HospitalServices;