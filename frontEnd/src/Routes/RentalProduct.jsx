import GalleryProduct from '../Components/RentalProducts/GalleryProduct';
import Hero from '../Components/RentalProducts/Hero';

function RentalProducts() {
  return (
    <div className="container-page">
      <Hero />
      <GalleryProduct />

      <section className="product__description">
        <h2 className="product__description__title">
          Alójate en el corazón de Buenos Aires
        </h2>
      </section>
    </div>
  );
}

export default RentalProducts;
