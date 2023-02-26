import { useForm } from '../../Hooks/useForm';

function FormTemplate({
  initialFormData,
  validationsForm,
  errorMsgOnSubmit,
  callbackSubmit,
  children,
}) {
  const { formData, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialFormData,
    validationsForm,
    errorMsgOnSubmit,
    callbackSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      {console.log(children)}
      {children}
      {errors.submit && (
        <div className="wrapper-error">
          <p className="input-error-msg error-form">{errors.submit}</p>
        </div>
      )}
      <button
        className="button-primary button-primary--full"
        onClick={handleSubmit}
      >
        Ingresar
      </button>
    </form>
  );
}

export default FormTemplate;
