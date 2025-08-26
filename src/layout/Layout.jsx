import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton"

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 flex items-center justify-center">{children}</main>
      <Footer />
      <ScrollToTopButton threshold={240} right={28} bottom={28} />
    </div>
  );
}

export default Layout;
