import './index.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-stone-100 min-h-screen p-8 mx-auto border-b-[16px] border-yellow-400">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
