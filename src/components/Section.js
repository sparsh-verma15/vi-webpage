import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import './globalStyles.css'

const Section = () => {
  return (
    <div className='p-4'>
      <section id="section1">
        <Section1/>
      </section>
      <br/>
      <section id="section2">
        <Section2/>
      </section>
      <br/>
      <section id="section3">
        <Section3/>
      </section>
      <section id="section4">
        <Section4/>
      </section>
    </div>
  );
}

export default Section;