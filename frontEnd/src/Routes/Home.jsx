import HomeSearch from '../Components/Body/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';
import MenuDrawerMobile from '../Components/Header/MenuDrawerMobile/MenuDrawerMobile';
import MyReservations from './MyReservations';

function Home({ menuDrawerVisible, setMenuDrawerVisible }) {
  return (
    <div className="container-page">
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      {/* <HomeSearch />
      <CarrouselCategories />
      <GridRentals /> */}
      <MyReservations />
    </div>
  );
}

export default Home;
