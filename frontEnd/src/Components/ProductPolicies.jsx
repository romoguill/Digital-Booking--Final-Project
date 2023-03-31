import './ProductPolicies.scss';

function ProductPolicies({ producto }) {
  return (
    <section className="policy container-main">
      <h2 className="section-title">¿Qué tenés que saber?</h2>
      <hr className="section-divider" />
      <div className="policy__items">
        <div className="item">
          <h4>Normas de la casa</h4>
          <p>{producto.normas}</p>
        </div>
        <div className="item">
          <h4>Salud y seguridad</h4>
          <p>{producto.saludYseguridad}</p>
        </div>
        <div className="item">
          <h4>Política de cancelación</h4>
          <p>{producto.cancelacion}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductPolicies;
