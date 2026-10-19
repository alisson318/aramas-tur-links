import Header from "@/modules/home/ui/components/header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark">
      <Header />
      <main className="h-screen p-3">{children}</main>
    </div>
  );
};

export default HomeLayout;
