import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import Footer from '../Components/Footer/Footer';
import HomeSearch from '../Components/Body/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';

function Home({ menuDrawerVisible, setMenuDrawerVisible }) {
  return (
    <>
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <Header setMenuDrawerVisible={setMenuDrawerVisible} />
      <HomeSearch />
      <Body>
        <CarrouselCategories />
        <GridRentals />
      </Body>
      <Footer />
    </>
  );
}

export default Home;
