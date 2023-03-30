import './AdminPanel.scss';
import '../Form/MainForm.scss';

import { HiPlusCircle } from 'react-icons/hi';

import { v4 as uuidv4 } from 'uuid';

import BannerProductTitle from '../BannerProductTitle';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import ImageInput from './ImageInput';
import MultiSearch from './MultiSearch';

function AdminPanel({ mode }) {
  const { storedValue } = useLocalStorage('token', null);
  const [amenities, setAmenities] = useState(null);
  const [idInputs, setIdInputs] = useState([]);

  const handleAddImgInput = () => {
    setIdInputs([...idInputs, uuidv4()]);
  };

  const handleRemoveImgInput = (id) => {
    setIdInputs(idInputs.filter((idInput) => idInput !== id));
  };

  const getAmenities = async (token) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/caracteristicas/todas`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAmenities(data);
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAmenities(storedValue);
  }, []);

  return (
    <div className="container-page">
      <BannerProductTitle titulo={'Administración'} />
      <div className="admin-rental-wrapper">
        <div className="container-main">
          <div className="heading-containter">
            <h1 className="section-title">
              {mode === 'create' ? 'Crear propiedad' : 'Modificar propiedad'}
            </h1>
            <MultiSearch />
          </div>
          <div className="section-wrapper">
            <form className="main-form__container">
              <section className="rental__general">
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
              </section>

              <section className="rental__properties">
                <h2 className="section-title">
                  {mode === 'create'
                    ? 'Agregar atributos'
                    : 'Modificar atributos'}
                </h2>
                <div className="amenities-wrapper">
                  {amenities &&
                    amenities
                      .sort((a, b) => a.titulo.localeCompare(b.titulo))
                      .map((amenity) => {
                        return (
                          <div key={amenity.id} className="form-control">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">{amenity.titulo}</label>
                          </div>
                        );
                      })}
                </div>
              </section>

              <section className="rental__policies">
                <h2 className="section-title">Políticas del producto</h2>
                <div className="policies__container">
                  <div className="policy__container">
                    <h3>Normas de la casa</h3>
                    <p>Descripción</p>
                    <textarea></textarea>
                  </div>
                  <div className="policy__container">
                    <h3>Salud y seguridad</h3>
                    <p>Descripción</p>
                    <textarea></textarea>
                  </div>
                  <div className="policy__container">
                    <h3>Política de cancelación</h3>
                    <p>Descripción</p>
                    <textarea></textarea>
                  </div>
                </div>
              </section>

              <section className="rental__images">
                <h2 className="section-title">
                  {mode === 'create'
                    ? 'Cargar imágenes '
                    : 'Modificar imágenes '}
                  <span>
                    <HiPlusCircle
                      color="rgb(28, 191, 180)"
                      cursor="pointer"
                      size={30}
                      onClick={handleAddImgInput}
                    />
                  </span>
                </h2>
                <ImageInput />

                {idInputs.map((id) => (
                  <ImageInput
                    key={id}
                    id={id}
                    handleRemoveImgInput={handleRemoveImgInput}
                    deletable
                  />
                ))}
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
