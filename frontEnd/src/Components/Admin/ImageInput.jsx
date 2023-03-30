import { HiMinus } from 'react-icons/hi';

function ImageInput({ deletable, id, handleRemoveImgInput }) {
  return (
    <div className="form-control">
      <input type="text" />
      {deletable && (
        <button type="button" onClick={() => handleRemoveImgInput(id)}>
          <HiMinus color="white" />
        </button>
      )}
    </div>
  );
}

export default ImageInput;
