import React from 'react';
import Card from '../../components/Portal/Card';
import {
  faBriefcase,
  faLightbulb,
  faChartLine,
  faQuestionCircle,
  faTh
} from '@fortawesome/free-solid-svg-icons';

const ResearchPortal = () => {
  return (
    <div className='mb-16'>
      <div className='font-bold text-xl uppercase tracking-widest text-gray-600 mb-12 text-center'>
        01/03 Research
      </div>
      <div className='flex flex-wrap px-8 md:px-0 justify-center'>
        <Card
          title='The Brief'
          icon={faBriefcase}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='Inspiration'
          icon={faLightbulb}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='About Your Business'
          icon={faChartLine}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='Website Questionnaire'
          icon={faQuestionCircle}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='Content Sheet'
          icon={faTh}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
      </div>
    </div>
  );
};

export default ResearchPortal;
