import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto my-10">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
