import "./Menu.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCategories } from "../../hooks/CategoryHook";
import { ItemList } from "../../models/ItemList/ItemList";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { usePageTitle } from "../../hooks/PageTilteHook";

export function ItemListContainer() {
  usePageTitle("Menú | Starbucks");
  const { title } = useParams();
  return (
    <>
      <Navbar />
      {title ? <CategoryMenu title={title} /> : <MainMenu />}
      <Footer />
    </>
  );
}

const CategoryMenu = ({ title }) => {
  const categories = useCategories();
  if (categories.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <span className="text-[25px] font-bold text-[#1e3932]">
          Cargando...
        </span>
      </div>
    );
  }

  const allCategories = categories.flatMap((section) => section.categorias);
  const targetCategory = allCategories.find(
    (cat) => (cat.title || cat.section) == title,
  );

  return (
    <>
      <header>
        <header className="py-7 px-88">
          <span className="text-[#00000094]">
            <Link to="/menu"> Menú </Link>
            <span className="font-bold"> / {title}</span>
          </span>
          <h1 className="text-[28.11px] font-bold">{title}</h1>
        </header>
      </header>
      <ItemList currentCategory={title} targetCategory={targetCategory} />
    </>
  );
};

const MainMenu = () => {
  return (
    <>
      <main className="px-88">
        <header className="py-7 font-bold">
          <p>¡Disfrútalos!</p>
          <h1 className="block text-4xl">
            Conoce nuestras bebidas y alimentos de
            <span className="block">temporada</span>
          </h1>
        </header>
        <ItemList />
      </main>
    </>
  );
};
