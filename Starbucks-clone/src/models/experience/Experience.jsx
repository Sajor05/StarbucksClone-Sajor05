export const Experience = ({title, image, text, isReversed}) => {
  const isDelivery = title === "Delivery"
  return (
    <div className="flex flex-row w-300 h-87.5">
        <div className={`flex flex-col w-150 px-8 py-8 gap-6 bg-[#f1ece8] ${isReversed ? 'order-last' : ''}`}>
            <div className="text-center">
              <h2 className="text-[30px] font-semibold">{title}</h2>
            </div>
            <div className="w-[471.44px] text-center ml-7">
              <span className="font-semibold text-[19px]">{text}</span>
            </div>
            {
              isDelivery 
              ? 
              <div className="text-center">
                <a href="https://www.pedidosya.com.ar/cadenas/starbucks" className="button mt-5 w-33.5 h-8">
                  <span className="font-semibold">
                    Pedí Delivery
                  </span>
                </a>
              </div>
               : ""
            }
        </div>
        <div>
            <img 
              src={image}
              alt={title}
              className="w-150 h-87.5"
            />
        </div>
    </div>
  )
}
