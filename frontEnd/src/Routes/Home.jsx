import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import Footer from '../Components/Footer/Footer';
import HomeSearch from '../Components/Body/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';

function Home() {
  return (
    <>
      <MenuDrawerMobile />
      <Header />
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
