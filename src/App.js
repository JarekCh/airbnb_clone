import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data.js'


function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})   

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards__list'>
        {cards}
      </section>

    </div>
  );
}

export default App;
