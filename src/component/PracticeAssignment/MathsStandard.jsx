import React from 'react';
import { Link } from 'react-router-dom';
import './MathsStandard.css';
const MathsStandard = () => {
  return (
    
    <section className="questionbank-section" style={{alignItems:'center', borderBottom: '1px solid #002b4f' }}>
      <div className="mid-inner wiki-mk  pt-20 pb-20 pl-40 pr-40">

        <ul className='mid-inner1'>

          <li className=''>
            <Link to="/maths-question">
              <div className="questionbank-item">
                <img src="https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png" alt="Question Image" />
                <div className="questionbank-item-head">
                  <h2>MYP Questionbank</h2>
                </div>
              </div>
            </Link>
          </li>

          

        </ul>
      </div>
    </section>
   
  );
};

export default MathsStandard;
