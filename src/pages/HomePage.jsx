import FormTrainer from '../components/HomePage/FormTrainer';
import '../pages/styles/homePage.css';
import bannerImage from '/poke_title.png';

const HomePage = () => {
  return (
    <div className="home_page">
      <img className="banner_image" src={bannerImage} alt="Banner" />
      <h1 className="title_home_page"> </h1>
      <hr/>
      <h2 className="hi_page"> Hi trainer </h2>
      <h3 className="hi_page_2">
        {' '}
        To see the pokemon's information, tell me your trainer name{' '}
      </h3>
      <FormTrainer />
      <div>
      <img className="pikachu_img" src="pikachu-pokemon.gif" alt="Banner" />
      </div>
    </div>
  );
};

export default HomePage;
