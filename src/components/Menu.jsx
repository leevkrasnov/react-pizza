import pizzaData from '../data/pizzaData';
import Pizza from './Pizza';

const pizzas = pizzaData;

function Menu() {
  return (
    <div className="bg-white shadow-md rounded-md mx-20">
      <div className="p-6">
        <h2 className="text-3xl text-center mb-4 pb-2 border-b border-gray-200">
          OUR MENU
        </h2>
        {pizzaData.length > 0 ? (
          <>
            <p className="text-center text-gray-600 mb-8">
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pizzas.map((pizza) => (
                <Pizza key={pizza.name} pizzaObj={pizza} />
              ))}
            </ul>
          </>
        ) : (
          <p>We are still working on our menu. Please come back later</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
