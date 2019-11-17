import HeroLeft from '../components/_App/HeroLeft';
import HeroRight from '../components/_App/HeroRight';
import HeroHeader from '../components/_App/HeroHeader';

export default () => (
  <div className='w-full h-screen'>
    <HeroHeader />
    <HeroLeft />
    <HeroRight />
  </div>
);
