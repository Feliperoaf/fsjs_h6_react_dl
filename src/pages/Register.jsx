import FormInput from "../componentes/FormInput"
import { useState } from "react"

const Register = () => {
    const [formData, setFormData] = useState({
    email:"",
    password:"",
    confirm:"",
  });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}

const [errors, setErrors] = useState({})
const [success, setSuccess] = useState(false)

function validation(name, value) {
  let error = ``

  if (name === `email`) {
    if (!value.trim()) error = "El email es obligatorio";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Por favor, introduce un email válido";
  }

    if (name === `password`) {
      if (!value.trim()) error = "La contraseña es obligatoria";
      else if (value.length < 8)
        error = "La contraseña debe tener al menos 8 caracteres";
      else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
        error = "La contraseña debe contener al menos una minúscula, una mayúscula y un número";
    }

    if (name === `confirm`) {
      if (!value.trim()) error = "Confirma tu contraseña";
      else if (value !== formData.password) error = "Las contraseñas no coinciden";
    }

  return error
}

  const handleBlur = (e) => {
		const { name, value } = e.target;

		const error = validation(name, value);
		setErrors(prev => ({ ...prev, [name]: error }))
	};
  

 const handleSubmit = (e) => {
  e.preventDefault();

  const nextErrors = {
    email: validation("email", formData.email),
    password: validation("password", formData.password),
    confirm: validation("confirm", formData.confirm),
  };

  setErrors(nextErrors);

  const hasErrors = Object.values(nextErrors).some(Boolean);
  if (hasErrors) { 
    setSuccess(false)
    return
  }
  setSuccess(true)
};

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <div className="mx-auto bg-black/88 text-white m-5 rounded-2xl  grid p-3 text-left max-w-5/6 md:max-w-3/6">
      <p className="font-medium mx-auto text-3xl mt-5">
        Registrate 🍕
      </p>
      <form
      className="w-full px-2 pb-2"
      onSubmit={handleSubmit}>
				<FormInput
					type={'email'}
					name={'email'}
					label={'Email'}
          value={formData.email}
					placeholder={'tuemail@ejemplo.com'}
          icon={'fas fa-at'}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
				/>
        <div>
          <FormInput
            type={'password'}
            name={'password'}
            label={'Contraseña'}
            value={formData.password}          
            placeholder={'•••••••••••'}
            icon={'fas fa-lock'}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
          />
          <FormInput
            type={'password'}
            name={'confirm'}
            label={'Confirmar contraseña'}
            value={formData.confirm}  
            placeholder={'•••••••••••'}
            icon={'fas fa-repeat'}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirm}
          />
        </div>
        <button
        disabled={hasErrors}
        className={`w-full bg-gray-100 font-bold text-black/88 py-3 px-4 mt-20 rounded text-[16px] ${hasErrors ? "text-gray-400" : "text-black/88"}`}
        type="submit">
          Enviar
        </button>
        {success && ( <p className="mt-4 text-green-600 font-semibold text-center">✅ Registro exitoso. ¡Bienvenido!</p>)}
      </form>
    </div>
  )
}

export default Register