import Card from "../../Common/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function GridRentals() {
  const [Deptos, setDeptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios("src/Common/JSON/deptos.json").then((res) => setDeptos(res.data));
    };
    fetchData();
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <h2>Recomendaciones</h2>
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
    </section>
  );
}

export default GridRentals;
