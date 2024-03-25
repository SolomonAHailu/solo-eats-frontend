import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import { useLoading } from "./hooks/useLoading";
import setLoadingInterceptor from "./interceptors/LoadingInterceptor";
import Footer from "./components/Footer/Footer";

function App() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);
  return (
    <>
      <Loading />
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
