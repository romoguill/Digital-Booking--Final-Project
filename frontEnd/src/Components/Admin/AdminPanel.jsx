import './AdminPanel.scss';
import '../Form/MainForm.scss';

import { HiPlusCircle } from 'react-icons/hi';

import { v4 as uuidv4 } from 'uuid';

import BannerProductTitle from '../BannerProductTitle';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import ImageInput from './ImageInput';
import MultiSearch from './MultiSearch';
import { useForm } from 'react-hook-form';

function AdminPanel({ mode }) {
  const { storedValue } = useLocalStorage('token', null);
  const [amenities, setAmenities] = useState(null);
  const [categories, setCategories] = useState(null);
  const [cities, setCities] = useState(null);
  const [idInputs, setIdInputs] = useState([]);

  const [selectedRental, setSelectedRental] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (formData) => {
    const payload = JSON.stringify(formData);
    console.log(payload);
  };

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

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/categoria/todas`
      );
      const data = await response.json();
      setCategories(data);
    };

    const getCities = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/ciudades/todas`
      );
      const data = await response.json();
      setCities(data);
    };

    getCategories();
    getCities();
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
            {mode === 'modify' && (
              <MultiSearch setSelectedRental={setSelectedRental} />
            )}
          </div>
          <div className="section-wrapper">
            <form
              className="main-form__container"
              onSubmit={(e) =>
                handleSubmit(onSubmit)(e).catch(() => {
                  setError('root.responseError', {
                    type: 'custom',
                    message: 'Error en el servidor. Intente más tarde.',
                  });
                })
              }
            >
              <section className="rental__general">
                <div className="form-control">
                  <label htmlFor="titulo">Nombre de la propiedad</label>
                  <input
                    {...register('titulo', {
                      required: 'Campo requerido',
                    })}
                  />

                  {errors.titulo && (
                    <p className="input-error-msg">{errors.titulo.message}</p>
                  )}
                </div>

                <div className="form-control">
                  <label htmlFor="categoria">Categoría</label>
                  <select
                    {...register('categoria', {
                      required: 'Campo requerido',
                    })}
                    defaultValue={''}
                  >
                    <option value="" disabled hidden></option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.titulo}
                      </option>
                    ))}
                  </select>

                  {errors.categoria && (
                    <p className="input-error-msg">
                      {errors.categoria.message}
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label htmlFor="direccion">Dirección</label>
                  <input
                    {...register('direccion', {
                      required: 'Campo requerido',
                    })}
                  />

                  {errors.direccion && (
                    <p className="input-error-msg">
                      {errors.direccion.message}
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label htmlFor="ciudad">Ciudad</label>
                  <select
                    {...register('ciudad', {
                      required: 'Campo requerido',
                    })}
                    defaultValue={''}
                  >
                    <option value="" disabled hidden></option>
                    {cities?.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.nombre}
                      </option>
                    ))}
                  </select>

                  {errors.ciudad && (
                    <p className="input-error-msg">{errors.ciudad.message}</p>
                  )}
                </div>

                <div className="form-control">
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    {...register('descripcion', {
                      required: 'Campo requerido',
                      minLength: {
                        value: 50,
                        message: 'Al menos 50 caracteres',
                      },
                    })}
                  ></textarea>

                  {errors.descripcion && (
                    <p className="input-error-msg">
                      {errors.descripcion.message}
                    </p>
                  )}
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
                            <input
                              type="checkbox"
                              {...register('caracteristicas')}
                              value={amenity.id}
                            />
                            <label htmlFor="caracteristicas">
                              {amenity.titulo}
                            </label>
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
                    <textarea {...register('normas')}></textarea>
                  </div>
                  <div className="policy__container">
                    <h3>Salud y seguridad</h3>
                    <p>Descripción</p>
                    <textarea {...register('salud-y-seguridad')}></textarea>
                  </div>
                  <div className="policy__container">
                    <h3>Política de cancelación</h3>
                    <p>Descripción</p>
                    <textarea {...register('cancelacion')}></textarea>
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
                <ImageInput id={uuidv4()} register={register} />

                {idInputs.map((id) => (
                  <ImageInput
                    key={id}
                    id={id}
                    handleRemoveImgInput={handleRemoveImgInput}
                    deletable
                    register={register}
                  />
                ))}
              </section>

              <button
                className="button-primary button-primary--full"
                type="submit"
              >
                {mode === 'create' ? 'Crear' : 'Modificar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
