import { Facebook } from "@components/icons/IconsForm";
import { LoginSocialNetworkButton } from "./LoginSocialNetworkButton";

export const LoginFacebookButton = () => {
  return (
    <LoginSocialNetworkButton onClick={() => console.log("login Facebook")}>
      <Facebook />
    </LoginSocialNetworkButton>
  );
};
