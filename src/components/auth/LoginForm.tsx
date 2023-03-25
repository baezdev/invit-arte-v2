import { Button } from "@components/Button";
import { InputForm } from "@components/form/InputForm";
import { Email, Lock } from "@components/icons/IconsForm";

const inputs = [
  {
    name: "email",
    label: "Email o Número de teléfono",
    type: "email",
    holder: "ejemplo@correo.com",
    icon: <Email />,
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    holder: "Minimo 8 caracteres",
    icon: <Lock />,
  },
];

const LoginForm = () => {
  return (
    <form className="mt-5">
      {inputs.map((inp) => (
        <div className="mb-5" key={inp.name}>
          <InputForm {...inp} />
        </div>
      ))}
      <div className="mt-9">
        <Button>Acceder</Button>
      </div>
    </form>
  );
};

export default LoginForm;
