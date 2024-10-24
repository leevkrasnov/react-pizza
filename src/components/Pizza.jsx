/* eslint-disable react/prop-types */
function Pizza({ pizzaObj }) {
  return (
    <li className="flex space-x-4 flex-shrink-0 mx-8">
      <img
        className={`rounded-md transition-all duration-300 ${
          pizzaObj.soldOut && 'grayscale'
        }`}
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
        width={150}
        height={150}
      />
      <div>
        <h3 className="text-lg">{pizzaObj.name}</h3>
        <p className="text-sm text-gray-600">{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
