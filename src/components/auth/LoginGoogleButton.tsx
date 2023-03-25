import { Google } from "@components/icons/IconsForm";
import { LoginSocialNetworkButton } from "./LoginSocialNetworkButton";

export const LoginGoogleButton = () => {
  return (
    <LoginSocialNetworkButton onClick={() => console.log("login google")}>
      <Google />
    </LoginSocialNetworkButton>
  );
};
