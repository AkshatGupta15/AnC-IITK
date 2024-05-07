import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function CustomCard1({animation, image , text , heading}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  data-aos={animation} data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
    <MDBCard className='hover:scale-105 dark:bg-black dark:text-white border-2'>
      <MDBCardImage position='top' alt='...' src={image} />
      <MDBCardBody className='font-serif'>
        <MDBCardTitle className='text-2xl font-[500]'>{heading}</MDBCardTitle>
        <MDBCardText>
          {text}
        </MDBCardText>
      </MDBCardBody>
      {/* <MDBListGroup flush>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup> */}
      <MDBCardBody className=''>
        {/* <MDBCardLink href='#'>Card link</MDBCardLink> */}
        <MDBCardLink className="text-nav-links hover:text-white hover:bg-nav-links p-3 rounded-md" href='#'>ReadMore</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}