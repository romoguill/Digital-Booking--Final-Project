import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';
import HomeSearch from '../components/body/HomeSearch';
import CarrouselCategories from '../components/Body/CarrouselCategories';
import GridRentals from '../components/body/GridRentals';

function Home() {
  return (
    <>
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
