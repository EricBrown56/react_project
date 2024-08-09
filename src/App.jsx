import Header from './Header';
import About from './About';
import Contact from './Contact';


function App() {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'
    
  }
  return (
    <div style={container}>
      <Header />
      <About />
      <Contact />
    </div>
  );
}
    

export default App;