import Header from '../Components/Header';
import Body from '../Components/Body/Body';
import Footer from '../Components/Footer';
import HomeSearch from '../Components/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';

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
