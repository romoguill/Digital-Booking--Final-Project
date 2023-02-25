import { useState } from 'react';

import { useNavigate } from 'react-router';

// TODO :

export function useForm(initialForm, validateForm, errorMsgOnSubmit, callAPI) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(formData));

    if (Object.keys(errors).length === 0) {
      // TODO : Customizar accion a realizar cuando la respuesta de backend es 200
      try {
        await callAPI(formData);
        navigate('/');
      } catch (e) {
        setErrors({ ...errors, submit: errorMsgOnSubmit });
      }
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
