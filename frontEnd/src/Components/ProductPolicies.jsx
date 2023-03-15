import './ProductPolicies.scss';

function ProductPolicies({ productPolicies }) {
  return (
    <section className="policy container-main">
      <h2 className="section-title">¿Qué tenés que saber?</h2>
      <hr className="section-divider" />
      <div className="policy__items">
        {productPolicies &&
          productPolicies.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h4>
                  <img src={item.url} className="politica-icon" /> {item.titulo}
                </h4>
                <p>{item.descripcion}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default ProductPolicies;
