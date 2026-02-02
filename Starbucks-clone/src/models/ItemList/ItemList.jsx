import { ProductCard } from "../ProductCard/ProductCard";
import { useProducts } from "../../hooks/ProductsHook";
import { useCategories } from "../../hooks/CategoryHook";

export const ItemList = ({ currentCategory, targetCategory }) => {
  const products = useProducts();
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
  if (!currentCategory) {
    return (
      <div className="flex flex-col gap-10">
        {categories.map((s, i) => (
          <div key={i}>
            <div className="section-title-container p-4">
              <span className="font-bold text-[18.6019px]">{s.section}</span>
            </div>
            <section className="grid grid-cols-3 gap-5">
              {s.categorias.map((c, k) => (
                <ProductCard data={c} isCategoryMenu={false} key={k} />
              ))}
            </section>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="flex flex-col px-88">
      {targetCategory.sections.map((s, i) => (
        <div key={i} className="mb-25">
          <div className="section-title-container p-4">
            <span className="font-bold text-[18.6019px]">{s.sectionTitle}</span>
          </div>
          <section className="grid grid-cols-3 gap-10">
            {products
              .filter((p) => p.section == s.section)
              .map((prod, j) => (
                <ProductCard data={prod} isCategoryMenu={true} key={j} />
              ))}
          </section>
        </div>
      ))}
    </main>
  );
};
