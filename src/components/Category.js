const data = [
    {
      id: 0,
      name: "Fresh Fruits",
      count: "10 Products",
      img: "/category1.jpg",
    },
    {
      id: 1,
      name: "Fresh Vegetables",
      count: "16 Products",
      img: "/category2.jpg",
    },
    {
      id: 2,
      name: "Soft Drinks",
      count: "20 Products",
      img: "/category7.jpg",
    },
    {
      id: 3,
      name: "Bread & Bakery",
      count: "9 Products",
      img: "/category6.jpg",
    },
    {
        id: 4,
        name: "Fish",
        count: "5 Products",
        img: "/category5.jpg",
      },
      {
        id: 5,
        name: "Eggs & Diary",
        count: "8 Products",
        img: "/category4.jpg",
      },
      {
        id: 6,
        name: "Canned Foods",
        count: "12 Products",
        img: "/category3.jpg",
      },
      {
        id: 7,
        name: "Fresh Dry Fruits",
        count: "15 Products",
        img: "/category8.jpg",
      },
  ];


function Category() {
  return (
    <div className="container p-4">
        <div className="lg:flex justify-between items-center">
          <h3 className="font-medium text-2xl mb-3">Categorys...</h3>
    
        </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
        data.map((Category) => {
            const {name,count,img}=Category;
         return (
    
            <div className="border border-gray-200 hover:border-black hover:scale-x-105 transition-transform">
        <div className="flex justify-between items-center p-2">
            <div className="space-y-2">
                <h3 className="font-medium text-xl">{name}</h3>
                <p className="text-grey-500 font-semibold"> {count}</p>
            </div>
            <div className="w-[100px] rounded-lg">
                <img src={img} alt="categoryimage" />
            </div>
        </div>
      
    </div>
         )
        })
    }
      </div>
    </div>
  );
}

export default Category;
