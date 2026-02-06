import "./Menu.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useCategories } from "../../hooks/useCategories";
import { ItemList } from "../../models/itemList/ItemList";
import type {
  CategoryMenuProp,
  MenuSection,
  Categoria,
} from "../../interface/Interface";

export function MenuListContainer() {
  usePageTitle("Menú | Starbucks");
  const { title } = useParams<{ title: string }>();
  return (
    <>
      <Navbar />
      {title ? <CategoryMenu title={title} /> : <MainMenu />}
      <Footer />
    </>
  );
}

const CategoryMenu = ({ title }: CategoryMenuProp) => {
  const categories = useCategories() as MenuSection[];

  if (categories.length === 0) {
    return (
      // Agregué min-h-[50vh] para que el 'Cargando' quede centrado verticalmente en móvil
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="text-[25px] font-bold text-[#1e3932]">
          Cargando...
        </span>
      </div>
    );
  }

  const allCategories: Categoria[] = categories.flatMap(
    (section: MenuSection) => section.categorias,
  );
  const targetCategory = allCategories.find((cat) => cat.title == title);

  return (
    <>
      <header>
        <header className="py-7 px-4 md:px-12 lg:px-20 xl:px-32 max-w-[1400px] mx-auto">
          <span className="text-[#00000094] text-sm md:text-base">
            <Link to="/menu" className="hover:underline">
              Menú
            </Link>
            <span className="font-bold"> / {title}</span>
          </span>
          <h1 className="text-[24px] md:text-[28.11px] font-bold mt-2">
            {title}
          </h1>
        </header>
      </header>
      <ItemList targetCategory={targetCategory} />
    </>
  );
};

const MainMenu = () => {
  return (
    <>
      {/* RESPONSIVE: Padding dinámico y contenedor centrado */}
      <main className="px-4 md:px-12 lg:px-20 xl:px-32 max-w-[1400px] mx-auto mb-10">
        <header className="py-7 font-bold">
          <p className="text-sm md:text-base mb-1">¡Disfrútalos!</p>

          {/* Título responsive: text-3xl en móvil, text-4xl en escritorio */}
          <h1 className="block text-3xl md:text-4xl leading-tight">
            Conoce nuestras bebidas y alimentos de
            <span className="block mt-1">temporada</span>
          </h1>
        </header>
        <ItemList />
      </main>
    </>
  );
};
