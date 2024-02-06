import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar'
import { ItemListContainer } from './components/pages/ItemListContainer'

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting ='Bienvenido a Lordish' />
      {/* <Footer /> */}
    </div>
       
  );
};

export default App
