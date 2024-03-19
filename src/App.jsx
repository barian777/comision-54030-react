import { BrowserRouter} from "react-router-dom";
import { CartContextProvider } from "./context/cartcontext/CartContext";
import { AppRouter } from "./router/AppRouter";


function App() {
  return (
    <>
      <BrowserRouter>
          <CartContextProvider> 
            <AppRouter />
          </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
