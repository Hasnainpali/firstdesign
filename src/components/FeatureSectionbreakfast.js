import { AiFillStar } from "react-icons/ai";
const data = [
  {
    id: 0,
    name: "Fresh Bread",
    price: "$30",
    img: "/product6.jpg",
  },
  {
    id: 1,
    name: "Eggs",
    price: "$20",
    img: "/product7.jpg",
  },
  {
    id: 2,
    name: "Halwa Puri",
    price: "$100",
    img: "/product8.jpg",
  },
  {
    id: 3,
    name: "Kachori",
    price: "$150",
    img: "/product9.jpg",
  },
  {
    id: 4,
    name: "Chai & Paratha",
    price: "40$",
    img: "/product10.jpg",
  },
 
];

function FeatureSectionbreakfast() {
  return (
    <div className="container p-4">
    <div className="lg:flex justify-between items-center  ">
      <div className="">
        <h3 className="font-medium text-2xl mb-2">Breakfast</h3>
        <p className="">
          Buy best quality breakfast online big basket stop near shop
        </p>
      </div>
      <div className="space-x-2 ">
        <button className="text-white bg-green-900 p-2 active:bg-green-700 hover:bg-green-700 hover:text-white hover:p-2 rounded-lg">
          Eggs 
        </button>
        <button className="text-gray-500 hover:bg-green-700 hover:text-white hover:p-2">
          Snacks
        </button>
        <button className="text-gray-500 hover:bg-green-700 hover:text-white hover:p-2">
          Pizza
        </button>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-4 gap-2">
      {data.map((Products) => {
        const { id,name, img, price } = Products;
        return (
          <div key={id} className="border border-grey-200 hover:border-black hover:scale-105  hover:m-2  transition-transform relative">
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
                <button className=" m-2 py-2 px-2 bg-slate-100 text-lg font-semibold rounded-lg shadow-md hover:bg-green-800 focus:outline-none">
                    <a href="/">Buy Now</a>
                  </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default FeatureSectionbreakfast;
