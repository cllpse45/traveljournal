
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import data from "./data.js"

function App() {
  
  const Cards = data.map ( cardData => {
    return(
      <>
      <Card data={cardData}/> 
      <hr/>
      </>
      
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <section>
        {Cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;






