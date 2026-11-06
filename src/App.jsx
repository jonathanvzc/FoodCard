
import {FoodCard} from './FoodCard';

import './App.css';

function App() {
  return (
    <main className="app-container">

      <section className="cards-container">

        <FoodCard
          title="Pesto pasta"
          price="15"
          description="Made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request."
          buttonText="ORDER NOW"
          image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800"
        />

        <FoodCard
          title="Italian Pizza"
          price="20"
          description="Delicious Italian pizza prepared with fresh tomatoes, mozzarella cheese and basil."
          buttonText="ORDER NOW"
          image="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800"
        />

      </section>

    </main>
  );
}

export default App;
