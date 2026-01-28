import "./ItemListContainer.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ItemList } from "./components/ItemList";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

const categories = [
  {
    "section":"Bebidas",
    "categorias":[
      {
       
        "title":"Café caliente",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFlat%20White%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Lattes",
          },
          {
            "sectionTitle":"Cappuccinos",
          },
          {
            "sectionTitle":"Flat White",
          },
          {
            "sectionTitle":"Americanos",
          },
          {
            "sectionTitle":"Macchiatos",
          },
          {
            "sectionTitle":"Mochas",
          },
          {
            "sectionTitle":"Café filtrado",
          }
        ]
      },
      {
       
        "title":"Cafés helados",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Caramel%20Macchiato%20425x425%20sin%20fondo_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Shaken Espresso",
          },
          {
            "sectionTitle":"Macchiatos",
          },
          {
            "sectionTitle":"Cappuccinos",
          },
          {
            "sectionTitle":"Lattes",
          },
          {
            "sectionTitle":"Cold Brews",
          },
          {
            "sectionTitle":"Americanos",
          },
          {
            "sectionTitle":"Mochas",
          },
          {
            "sectionTitle":"Café filtrado",
          }
        ]
      },
      {
       
        "title":"Frappuccino®",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FDulce%20de%20leche%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Frappuccino® con café"
          },
          {
            "sectionTitle":"Frappuccino® sin café"
          }
        ]
      },
      {
       
        "title":"Té caliente",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FEnglish%20Breakfast%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Té Verde"
          },
          {
            "sectionTitle":"Té Chai"
          },
          {
            "sectionTitle":"Infusiones"
          },
          {
            "sectionTitle":"Té Negro"
          }
        ]
      },
      {
       
        "title":"Té helado",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Té Herbal helado"
          },
          {
            "sectionTitle":"Té Verde helado"
          }
        ]
      },
      {
       
        "title":"Heladas",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMango%20Dragonfruit%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Refreshers"
          },
          {
            "sectionTitle":"Jugos, aguas y bebidas saborizadas"
          }
        ]
      },
      {
       
        "title":"Calientes",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChocolate%20Caliente%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Chocolate Caliente"
          }
        ]
      }
    ]
  },
  {
    "section":"Comida",
    "categorias":[
      {
        "title":"Bakery",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroissant-Relleno-Avellana-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Recién horneados"
          },
          {
            "sectionTitle":"Croissants, Rolls & más"
          },
          {
            "sectionTitle":"Salados"
          },
          {
            "sectionTitle":"Muffins"
          },
          {
            "sectionTitle":"Budines"
          },
          {
            "sectionTitle":"Tortas"
          }
        ]
      },
      {
        "title":"Sándwichs & preparados",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBagel-Sandwich-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Sándwichs & más"
          },
          {
            "sectionTitle":"Ensaladas & Wraps"
          }
        ]
      },
      {
        "title":"Snacks",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMoneda-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Frutos secos & más"
          },
          {
            "sectionTitle":"Chocolates"
          },
          {
            "sectionTitle":"Biscotti & Cookies"
          }
        ]
      }
    ]
  },
  {
    "section":"En casa",
    "categorias":[
      {
        "title":"Café en granos",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2024-04%2FVERONA_MEDIA_LIBRA.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Tostado Blonde"
          },
          {
            "sectionTitle":"Tostado Medio"
          },
          {
            "sectionTitle":"Tostado Oscuro"
          }
        ]
      },
      {
        "title":"Té",
        "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCAJA-TE-HIBISCUS_2.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "sections":[
          {
            "sectionTitle":"Infusiones"
          },
          {
            "sectionTitle":"Té Chai"
          },
          {
            "sectionTitle":"Té Negro"
          },
          {
            "sectionTitle":"Té Verde"
          }
        ]
      }
    ]
  }
]

export function ItemListContainer() {
  const {title} = useParams()
  return(
    <>
      <Navbar/>
      { title ? <CategoryMenu title={title}/> : <MainMenu/>}
      <Footer/>
    </>
  )

}

const CategoryMenu = ({title}) => {
  const allCategories = categories.flatMap(section => section.categorias);
  const targetCategory = allCategories.find((cat) => cat.title === title);
  return(
    <>
      <header>
          <header className="py-7 px-88">
            <span className="text-[#00000094]"> <Link to="/menu" > Menú </Link><span className="font-bold"> / {title}</span></span>
            <h1 className="text-[28.11px] font-bold">{title}</h1>
          </header>
      </header>
      <ItemList currentCategory={title} targetCategory={targetCategory}/>
    </>
  )
}

const MainMenu = () => {
  return(
      <>
        <main className="px-88">
          <header className="py-7 font-bold">
            <p>¡Disfrútalos!</p>
            <h1 className="block text-4xl">Conoce nuestras bebidas y alimentos de 
              <span className="block">temporada</span>
            </h1>
          </header>
          <ItemList/>
        </main>    
      </>
  )
}