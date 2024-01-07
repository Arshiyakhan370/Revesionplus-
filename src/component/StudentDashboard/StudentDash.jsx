import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomCard = ({ link, imageUrl, backgroundColor }) => {
  return (
    <a href={link}>
      <div
        className="card bg-c-blue"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor,
          height: '160px',
          width: '295px',
          borderRadius: '30px',
        }}
      >
        <div className="card-body"></div>
      </div>
    </a>
  );
};

const StudentDash = () => {
  useEffect(() => {
    const logo = document.getElementById('pro-sidebar-logo');

    gsap.to(logo, {
      x: '80vw',  
      duration: 10,
      ease: 'linear',
      repeat: -1,
      onComplete: () => {
        gsap.set(logo, { x: 0 });
      },
    });
  }, []); 

  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <span id="pro-sidebar-logo" className="pro-sidebar-logo ml-8 ">
          <div>M</div>
          <h5 className='text-black'> My Revision+ </h5>
        </span> 
      </nav>
      <Container className='mt-24' style={{ padding: '0 80px' }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Link to="/create-filter">
              <CustomCard
                imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1.png"
                backgroundColor="#f58840"
              />
            </Link>
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="https://ibgakiosk.com/v2/new_question_index"
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-1_New2.png"
              backgroundColor="#6fb85e"
            />
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="https://www.neodynamic.com/downloads/wcpp/wcpp2.aspx"
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-6.png"
              backgroundColor="#3468b2"
            />
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="#"
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-2.png"
              backgroundColor="#73abdc"
            />
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="https://ibgakiosk.com/v2/assignmentview"
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1new.png"
              backgroundColor="#f58840"
            />
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="https://ibgakiosk.com/v2/assignmentview"
              imageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgcF/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APQAHJXsgAgAAACiKgAAAAGiLBQTQQ0NBEVFAAEAB0EEVUAFEAURQAUQBAUAgAgKmgAhqKCAACAAA2YogAAIoAAAqAKIAqAAABuoagAIoAgKgAAA6CUQUSgKAAAAAAAAAAlAEBFAABAAAUAAaEVBUBBRAFqsqBVZAaoyA1UEAAUQABFRQAAAAABRFQAAFQBRFAABUAAABAAABBUUAAABUABQBBUEFEUAAAAAAAAAEBUBQAAAARUFAAUAQAAAQAAAAAAAAAFAAAAAABAGoAKKAjIAAAAAAAAAAAAAAAACCqgACCgADQggoAgAAAAAAAAAAAAAAgCiAoAgsAFGhFZQVAFEBFAAAAAAAAAAQAEBVATQNAVYCAKoIhQAAAUAClAAAAAQKAIAKVAAqUFCgAAA/9k="
              backgroundColor='#FFFFE0'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default StudentDash;
