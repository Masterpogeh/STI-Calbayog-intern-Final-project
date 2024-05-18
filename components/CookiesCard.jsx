import {motion} from "framer-motion";
import Image from "next/image";

const CookiesCard = ({id,imgUrl,title,price,active,handleClick, setCardLength}) => {

    const getCount = () => {
        const prevData = localStorage.getItem("data") || "[]"
        const countData = JSON.parse(prevData)
        return countData.length
    }

    const handleAddToCart = (id, title, price) => {
        const prevData = localStorage.getItem("data") || "[]"
        const parsedData = JSON.parse(prevData)
          localStorage.setItem("data", JSON.stringify( [
            ...parsedData,
            { id: id, title: title, price: price }
        ]));
        setCardLength(getCount())
    };
    




    

    


  return (
    <motion.div className={`${active === id ? 'flex-[3]' : 'flex-[2]'} relative flex items-center justify-center min-w-[180px] h-[450px] cursor-pointer transition-[flex] ease-in-out duration-700 overflow-hidden`} onClick={() => handleClick(id)}>
        <Image src={imgUrl} alt="coffee" fill className="rounded-xl object-cover" />
        {active !== id ?(
            <div className="absolute bottom-0 w-24 h-[120px] text-black text-4xl font-medium">
                {title}
            </div>
        ) : (
            <div className="absolute p-6 w-full h-36 bottom-0 left-0 rounded-b-xl bg-[rgba(0,0,0,0.5)] text-white">
            <h2 className="text-3xl font-semibold">{title}</h2>

            <div className="flex justify-between mb-2">
                <p className="text-2xl font-medium">{price}</p>
                

                <button className="flex justify-between mb-2 gap-3 items-center bg-addtocartcolor px-3 py-2 rounded-lg" onClick={() => handleAddToCart(id, title, price)}>
                    <Image className=" translate-x-" src={"/ADDTUCARTicon.png"} width={35} height={35} justify-end></Image>
                    <p className="text-white text-right">Add to cart</p>
                </button>
            </div>
            

        </div>
        )}
    </motion.div>
  )
}

export default CookiesCard