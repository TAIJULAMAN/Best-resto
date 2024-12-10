import Container from "@/components/ui/container";
import SetNewPasswordFrom from "./_components/SetNewPasswordFrom";

export const metadata = {
  title: "Set New Password",
  description:
    "Set New Password and login to your account to continue using our services.",
};

const SetNewPasswordPassword = () => {
  return (
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <SetNewPasswordFrom></SetNewPasswordFrom>
    </Container>
  );
};

export default SetNewPasswordPassword;
