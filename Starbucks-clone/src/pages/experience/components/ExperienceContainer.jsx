import { Experience } from "../../../models/experience/Experience"

export const ExperienceContainer = () => {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col gap-8">
            <Experience 
                title = "In store"    
                image = "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67487_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max" 
                text = "En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable."
                isReversed={false}
            />
            <Experience 
                title = "Drive Thru"    
                image = "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67488_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max" 
                text = "Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto."
                isReversed={true}
            />
            <Experience 
                title = "Delivery"    
                image = "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67485_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max" 
                text = "Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya."
                isReversed={true}
            />
        </div>
    </div>

  )
}
