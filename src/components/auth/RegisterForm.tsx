import { Button } from "@components/Button";
import { InputForm } from "@components/form/InputForm";
import { Email, Lock, User } from "@components/icons/IconsForm";

export const RegisterForm = () => {
  return (
    <form className="mt-5">
      <div className="mb-5">
        <InputForm
          name="name"
          type="text"
          label="Nombre"
          holder="Su nombre"
          icon={<User />}
          done
        />
      </div>
      <div className="mb-5">
        <InputForm
          name="email"
          type="email"
          label="Email o Número de teléfono"
          holder="ejemplo@correo.com"
          icon={<Email />}
          done
        />
      </div>
      <div className="mb-5">
        <InputForm
          name="password"
          type="password"
          label="Contraseña"
          holder="Minimo 8 caracteres"
          icon={<Lock />}
          done
        />
      </div>
      <div className="mt-9">
        <Button>Registrate</Button>
      </div>
    </form>
  );
};
