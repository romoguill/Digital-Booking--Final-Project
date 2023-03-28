import './CreateRental.scss';

import BannerProductTitle from '../Components/BannerProductTitle';

function CreateRental() {
  return (
    <div className="container-page">
      <BannerProductTitle titulo={'Administración'} />
      <div className="create-rental-wrapper">
        <div className="container-main">
          <h1 className="section-title">Crear propiedad</h1>
          <div className="section-wrapper">
            <form>
              <div className="form-control">
                <label htmlFor="name">Nombre de la propiedad</label>
                <input
                // {...register('apellido', {
                //   required: 'Campo requerido',
                //   pattern: {
                //     value:
                //       /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
                //     message: 'Apellido inválido',
                //   },
                // })}
                />

                {/* {errors.lastName && (
                  <p className="input-error-msg">{errors.lastName.message}</p>
                )} */}
              </div>

              <div className="form-control">
                <label htmlFor="category">Categoría</label>
                <input
                // {...register('apellido', {
                //   required: 'Campo requerido',
                //   pattern: {
                //     value:
                //       /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
                //     message: 'Apellido inválido',
                //   },
                // })}
                />

                {/* {errors.lastName && (
                  <p className="input-error-msg">{errors.lastName.message}</p>
                )} */}
              </div>

              <div className="form-control">
                <label htmlFor="address">Dirección</label>
                <input
                // {...register('apellido', {
                //   required: 'Campo requerido',
                //   pattern: {
                //     value:
                //       /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
                //     message: 'Apellido inválido',
                //   },
                // })}
                />

                {/* {errors.lastName && (
                  <p className="input-error-msg">{errors.lastName.message}</p>
                )} */}
              </div>

              <div className="form-control">
                <label htmlFor="city">Ciudad</label>
                <select
                // {...register('ciudad', {
                //   required: 'Campo requerido',
                // })}
                >
                  {/* {cities?.map((city) => (
                    <option
                      key={city.nombre}
                      value={city.nombre}
                      defaultValue={city[0]?.nombre}
                    >
                      {city.nombre}
                    </option>
                  ))} */}
                </select>

                {/* {errors.lastName && (
                  <p className="input-error-msg">{errors.lastName.message}</p>
                )} */}
              </div>

              <div className="form-control">
                <label htmlFor="description">Descripción</label>
                <textarea></textarea>
              </div>

              <section className="rental__properties">
                <h2 className="section-title">Agregar atributos</h2>
                <div className="form-control">
                  <input type="checkbox" name="" id="wifi" />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" name="" id="wifi" />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" name="" id="wifi" />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" name="" id="wifi" />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" name="" id="wifi" />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" name="" id="wifi" />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" name="" id="wifi" />
                  <label htmlFor="wifi">Wifi</label>
                </div>
              </section>

              <section className="rental__policies">
                <h2 className="section-title">Políticas del producto</h2>
                <div className="policies__container">
                  <div className="policy__container">
                    <h3>Normas de la casa</h3>
                    <p>Descripción</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="policy__container">
                    <h3>Salud y seguridad</h3>
                    <p>Descripción</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="policy__container">
                    <h3>Política de cancelación</h3>
                    <p>Descripción</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
              </section>

              <section className="rental__images">
                <h2 className="section-title">Cargar imágenes</h2>
                <input type="text" />
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRental;
