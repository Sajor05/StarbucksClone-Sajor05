import { useParams } from "react-router-dom";
import { ItemDetail } from "./components/ItemDetail";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

const products = [
  {
   
    "title":"Café Frappuccino",
    "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCafe%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    "description":"Frappuccino a base de café. Dulce y cremosa combinación de café, leche y hielo.",
    "section":"Frappuccino® con café",
    "currentItemCount":0,
    "price":12000
  },
  {
   
    "title":"Caramel Frappuccino",
    "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCaramel%20Frapp%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    "description":"Frappuccino a base de café. Dulce combinación de caramelo, café, leche y hielo, decorado con un remolino de crema batida y topping de caramelo.",
    "section":"Frappuccino® con café",
    "currentItemCount":0,
    "price":12500
  },
  {
   
    "title":"Mocha Blanco Frappuccino",
    "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FWhite%20Mocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    "description":"Frappuccino a base de café. Deliciosa mezcla que combina café, leche y chocolate blanco, batido con hielo, coronado con crema batida y salsa de mocha.",
    "section":"Frappuccino® con café",
    "currentItemCount":0,
    "price":13000
  },
  {
   
    "title":"Mocha Frappuccino",
    "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    "description":"Frappuccino a base de café. Deliciosa mezcla que combina café, leche y chocolate, batido con hielo, coronado con crema batida y salsa de mocha.",
    "section":"Frappuccino® con café",
    "currentItemCount":0,
    "price":13500
  },
  {
   
    "title":"Chai Frappuccino",
    "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FWhite%20Mocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    "description":"Nuestro Té Chai combinado con leche, hielo molido y una deliciosa terminación de crema batida.",
    "section":"Frappuccino® sin café",
    "currentItemCount":0,
    "price":12000
  },
  {
   
    "title":"Mocha Creme Frappuccino",
    "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    "description":"Frappuccino a base de crema. Perfecta combinación a base de crema y chocolate, batida con hielo, decorada con crema batida y salsa de chocolate.",
    "section":"Frappuccino® sin café",
    "currentItemCount":0,
    "price":12500
  }
]

export const ItemDetailContainer = () => {
  const {title} = useParams()
  const findItem = products.find((p) => p.title == title)

  return (
    <>
      <Navbar/>
      <ItemDetail item={findItem} />
      <Footer/> 
    </>

  );
};