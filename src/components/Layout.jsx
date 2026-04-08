import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <Sidebar />

        <main className="ml-64 min-h-screen flex-1">
          <Header />
          <section className="p-6">{children}</section>
        </main>
      </div>
    </div>
  );
}

export default Layout;
