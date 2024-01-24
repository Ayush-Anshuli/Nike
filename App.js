import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Popularproducts from './Components/Popularproducts';
import Superquality from './Components/Superquality';
import Specialoffer from './Components/Specialoffer'
import Customer from './Components/Customer';
import Service from './Components/Service';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  return (
    <main className="relative">
      <Nav/>

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/> 
      </section>

      <section className="padding">
       <Popularproducts/>
      </section>

      <section className="padding">
        <Superquality/>
      </section>

      <section className="padding">
        <Service/>
      </section>

      <section className="b padding rounded-xl m-4">
        
        <Specialoffer/>
      </section>

      <section className="padding-x sm:py-16 w-full">
        <Customer/>
      </section>

      <section className="padding">
        <Subscribe/>
      </section>

      <section className="padding-x padding-t pb-8 bg-black text-white">
        <Footer/>
      </section>

    </main>
  );
}

export default App;
