import Container from "@/components/ui/container";
import VerifyOtpForm from "./_componets/VerifyOtpFrom";

export const metadata = {
  title: "Verify OTP",
  description: "Verify OTP then you will be able to set new password.",
};
const VerifyOtpPage = () => {
  return (
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <VerifyOtpForm></VerifyOtpForm>
    </Container>
  );
};

export default VerifyOtpPage;
