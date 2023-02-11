import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import { ToastContainer } from 'react-toastify';
import {ContextProvider} from './context';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;