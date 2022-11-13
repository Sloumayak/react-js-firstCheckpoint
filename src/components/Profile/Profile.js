import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileImage from '../../utilities/ProfileImage.jpg'
import './Profile.css'
function ProfileCustomer() {
    const fullName ='Abdessalem yaccoubi'
  return (
    <Card style={{ width: '18rem' }} className ='container'>
    <Card.Img variant="top" src={ProfileImage} />
    <Card.Body>
      <Card.Title>{fullName}</Card.Title>
      <Card.Text>
        I work as a freelancer.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default ProfileCustomer