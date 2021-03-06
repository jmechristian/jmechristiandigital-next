import axios from 'axios';
import HeroLeft from '../components/_App/HeroLeft';
import HeroRight from '../components/_App/HeroRight';
import HeroHeader from '../components/_App/HeroHeader';
import Projects from '../components/_App/Projects';

const Home = ({ projects }) => (
  <>
    <div className='w-full h-screen'>
      <HeroHeader />
      <HeroLeft />
      <HeroRight />
    </div>
    <div className='my-16'>
      <Projects projects={projects} />
    </div>
  </>
);

Home.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/projects');
  return { projects: response.data };
};

export default Home;
