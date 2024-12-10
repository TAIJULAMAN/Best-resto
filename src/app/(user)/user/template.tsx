import Container from "@/components/ui/container";
import DashboardSidebar from "./_components/DashboardSidebar";

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-primary-white py-10">
      <Container className="items-start gap-x-8 xl:flex">
        <DashboardSidebar />
        <div className="flex-grow">{children}</div>
      </Container>
    </div>
  );
}
