/* eslint-disable react/prop-types */

function Order({ openHour, closeHour }) {
  return (
    <div className="flex flex-col items-center pt-3">
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className=" mt-3 transition-all cursor-pointer px-6 py-3 bg-yellow-400 flex justify-center">
        Order
      </button>
    </div>
  );
}

export default Order;
