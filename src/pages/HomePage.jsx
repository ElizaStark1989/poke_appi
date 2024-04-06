import FormTrainer from "../components/HomePage/FormTrainer";
import "../pages/styles/homePage.css";


const HomePage = () => {
  return (
    <div className="home_page" >  
        <h1 className="title_home_page" > Pokedex </h1>
        <h2 className="hi_page" > Hi trainer </h2>
        <h3 className="hi_page_2" > To see the pokemon's information, tell me your trainer name </h3>
        <FormTrainer />
    </div>
  )
}

export default HomePage;