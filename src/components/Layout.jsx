import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <Sidebar />

        <main className="ml-64 flex min-h-screen flex-1 flex-col">
          <Header />
          <section className="flex-1 p-6">{children}</section>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Layout;
