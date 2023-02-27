import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import HomeSearch from '../Components/Body/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';
import { useContext } from 'react';
import { UserContext } from '../Contexts/Context';
import { useLocation } from 'react-router';

function Home({ menuDrawerVisible, setMenuDrawerVisible }) {
  const { userAuthInfo, setUserAuthInfo } = useContext(UserContext);

  return (
    <div className="container-page">
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <HomeSearch />
      <CarrouselCategories />
      <GridRentals />
      <Footer />
    </div>
  );
}

export default Home;
