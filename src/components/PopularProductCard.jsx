import { star } from "../assets/icons"
const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
            src={imgURL}
            alt={name}
            className="w-[280px] h-[280px]"/>
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>
        </div>
        <div className="flex flex-col justify-start">
            <h3 className="font-palanquin font-bold text-2xl">{name}</h3>
            <p className="font-montserrat text-xl leading-normal text-coral-red">{price}</p>
        </div>
    </div>

  )
}

export default PopularProductCard
