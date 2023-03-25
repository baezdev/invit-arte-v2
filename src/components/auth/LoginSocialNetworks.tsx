import { LoginFacebookButton } from "./LoginFacebookButton";
import { LoginGoogleButton } from "./LoginGoogleButton";

export const LoginSocialNetworks = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <LoginGoogleButton />
      <LoginFacebookButton />
    </div>
  );
};
