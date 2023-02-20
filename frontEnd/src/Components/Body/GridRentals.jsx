import Card from '../Cards/CardRentalGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './GridRentals.scss';

function GridRentals() {
  const [Deptos, setDeptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios('src/Common/JSON/deptos.json').then((res) => setDeptos(res.data));
    };
    fetchData();
  }, []);

  return (
    <section className="grid-rentals">
      <div className="container-main">
        <h2 className="text-dark">Recomendaciones</h2>
        <div className="grid-rentals__grid">
          {Deptos.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                category={item.category}
                title={item.title}
                location={item.location}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GridRentals;
