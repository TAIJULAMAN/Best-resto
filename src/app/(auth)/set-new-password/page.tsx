import Container from "@/components/ui/container";
import SetNewPasswordFrom from "../../../components/auth/SetNewPasswordFrom";
import CustomHeader from "@/components/shared/CustomHeader";


const SetNewPasswordPassword = () => {
  return (
<>
<CustomHeader
        title="New Password"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "New Password" }]}
        backgroundImage="/menu1.png"
      />
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <SetNewPasswordFrom></SetNewPasswordFrom>
    </Container>
</>
  );
};

export default SetNewPasswordPassword;
