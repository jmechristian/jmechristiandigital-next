import React from 'react';
import axios from 'axios';

import Research from '../components/Project/Research';
import Design from '../components/Project/Design';
import Colors from '../components/Project/Colors';
import Delivery from '../components/Project/Delivery';
import Header from '../components/_App/Header';
// import baseUrl from '../utils/baseUrl';

const Project = ({ project }) => {
  return (
    <>
      <Header />
      <div className='flex-col justify-center mt-4'>
        <Research {...project} />
        <Design {...project} />
        <Colors {...project} />
        <Delivery {...project} />
      </div>
    </>
  );
};

Project.getInitialProps = async ({ query: { _id } }) => {
  const payload = { params: { _id } };
  const response = await axios.get(
    'http://localhost:3000/api/project',
    payload
  );
  return { project: response.data };
};

export default Project;
