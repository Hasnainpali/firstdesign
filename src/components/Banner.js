import { FaShippingFast } from "react-icons/fa"
import {GiReturnArrow} from "react-icons/gi"
import { MdPayment } from "react-icons/md"
import { FcCustomerSupport } from "react-icons/fc"

const data=[
    {
      id:0,
      title:" Fast Shipping",
      icon: <FaShippingFast className="w-10 h-10"/>,
      para:"Shipped in 1-3 days",
    },
    {
      id:1,
        title:"Free Return ",
        icon: <GiReturnArrow className="w-10 h-10"/>,
        para:"Free 7 Days Return",
      },
      {
        id:2,
        title:"Payment Method",
        icon: <MdPayment className="w-10 h-10"/>,
        para:"Cash on Delivery Option",
      },
      {
        id:3,
        title:"Customer Support",
        icon: <FcCustomerSupport className="w-10 h-10"/>,
        para:"Email & Phone 24/7",
      },
]


function Banner() {
  return ( 
    <div className='container p-4 '>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 bg-slate-100 p-6">
        {
          data.map((Banner)=>{
            const {id,title,icon,para}=Banner;
            return(
                <div key={id} className="">
                    <div className="flex gap-4 items-center">
                       <div className=" cursor-pointer rounded-lg">
                       <span> {icon} </span>
                       </div>
                       <div className="cursor-default">
                        <h4 className="font-medium text-lg">{title}</h4>
                        <p className="text-sm">{para}</p>
                       </div>
                    </div>
                </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Banner
