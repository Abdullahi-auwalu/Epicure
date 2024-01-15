import { mealData } from "../data/data";
import { FaArrowRightLong } from "react-icons/fa6";

const Meal = () => {
  return (
    <div className="max-w-[1520] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {mealData.map((item) => {
          return (
            <div
              key={item.id}
              className="border-none hover:scale-105 duration-300"
            >
              <img
                className="w-full h-[200px] object-cover rounded-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between py-2 px-2">
                <p className="font-bold">{item.name}</p>
                <p className=" bg-orange-700 h-18 w-18 rounded-full text-white -mt-10 px-2 py-4 border-8 font-bold">
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4 -mt-7">
                <p className="flex cursor-pointer text-indigo-600">
                  View More
                  <FaArrowRightLong className="mt-2 ml-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
