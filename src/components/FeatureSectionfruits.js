import { AiFillStar } from "react-icons/ai";
const data = [
  {
    id: 0,
    name: "Strawberry",
    price: "$400",
    img: "/product1.jpg",
  },
  {
    id: 1,
    name: "Watermelon",
    price: "$50",
    img: "/product2.jpg",
  },
  {
    id: 2,
    name: "Anar/Pomogrenate",
    price: "$100",
    img: "/product3.jpg",
  },
  {
    id: 3,
    name: "Apple",
    price: "$250",
    img: "/product4.jpg",
  },
  {
    id: 4,
    name: "Mango",
    price: "$300",
    img: "/product5.jpg",
  },
 
];

function FeatureSectionfruits() {
  return (
    <div className="container p-4">
      <div className="lg:flex justify-between items-center  ">
        <div className="">
          <h3 className="font-medium text-2xl mb-2">Fruits & Vegetables</h3>
          <p className="">
            Buy farm fresh fruits and Vegetables online at the best prices
          </p>
        </div>
        <div className="space-x-2 ">
          <button className="text-white bg-green-900 p-2 active:bg-green-700 hover:bg-green-700 hover:text-white hover:p-2 rounded-lg">
            Fruits
          </button>
          <button className="text-gray-500 hover:bg-green-700 hover:text-white hover:p-2">
            Vegetables
          </button>
          <button className="text-gray-500 hover:bg-green-700 hover:text-white hover:p-2">
            Breakfast
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-4 gap-2">
        {data.map((Products) => {
          const { name, img, price } = Products;
          return (
            <div className="border border-grey-200 hover:border-black hover:scale-105 transition-transform relative">
              <div className="justify-between items-center">
                <div className="w-full h-full p-2 ">
                  <img className="rounded-lg w-full" src={img} alt="productimage" />
                </div>
                <div className="space-y-2 relative p-2">
                  <div className="text-yellow-500 flex gap-2 text-[20px]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] p-2"> {name}</h3>
                  <p className="text-red-600 text-[20px] ml-2 mb-2  ">
                    {price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureSectionfruits;
