import FormTrainer from '../components/HomePage/FormTrainer';
import '../pages/styles/homePage.css';
import bannerImage from '/BANNER-26-POKEMON-1920X700-1170x427.jpg';

const HomePage = () => {
  return (
    <div className="home_page">
      <img className="banner_image" src={bannerImage} alt="Banner" />
      <h1 className="title_home_page"> Pokemon appi </h1>
      <hr/>
      <h2 className="hi_page"> Hi trainer </h2>
      <h3 className="hi_page_2">
        {' '}
        To see the pokemon's information, tell me your trainer name{' '}
      </h3>
      <FormTrainer />
    </div>
  );
};

export default HomePage;
