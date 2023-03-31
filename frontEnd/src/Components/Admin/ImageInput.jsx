import { HiMinus } from 'react-icons/hi';

function ImageInput({ deletable, id, handleRemoveImgInput, register }) {
  return (
    <div className="form-control">
      <input
        {...register(`imagen-${id}`, {
          required: 'Campo requerido',
        })}
      />
      {deletable && (
        <button type="button" onClick={() => handleRemoveImgInput(id)}>
          <HiMinus color="white" />
        </button>
      )}
    </div>
  );
}

export default ImageInput;
