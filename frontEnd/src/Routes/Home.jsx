import HomeSearch from '../Components/Body/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';
import MenuDrawerMobile from '../Components/Header/MenuDrawerMobile/MenuDrawerMobile';
import { useContext } from 'react';
import { UserContext } from '../Contexts/Context';

import Booking from './Booking';
import BookingSuccess from './BookingSuccess';

function Home({ menuDrawerVisible, setMenuDrawerVisible }) {
  const { userAuthInfo, setUserAuthInfo } = useContext(UserContext);

  return (
    <div className="container-page">
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      {/* <HomeSearch />
      <CarrouselCategories />
      <GridRentals /> */}
      {/* <BookingSuccess /> */}
      <Booking />
    </div>
  );
}

export default Home;
