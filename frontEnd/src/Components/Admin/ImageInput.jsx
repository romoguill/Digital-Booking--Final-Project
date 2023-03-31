import { HiMinus } from 'react-icons/hi';

function ImageInput({ deletable, id, handleRemoveImgInput, register, errors }) {
  return (
    <div className="wrapper-form-control">
      {errors && errors[`imagen-${id}`] && (
        <p
          className="input-error-msg"
          style={{
            display: 'block',
            position: 'static',
            textAlign: 'left',
            marginTop: '0',
          }}
        >
          {errors[`imagen-${id}`].message}
        </p>
      )}

      <div className="form-control">
        <input {...register(`imagen-${id}`)} />

        {deletable && (
          <button type="button" onClick={() => handleRemoveImgInput(id)}>
            <HiMinus color="white" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageInput;
