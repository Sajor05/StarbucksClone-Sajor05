import { useProducts } from "../../hooks/useProucts";
import { ProductCard } from "../productCard/ProductCard";
import { useCategories } from "../../hooks/useCategories";
import type { ItemListProps } from "../../interface/Interface";

export function ItemList({ targetCategory }: ItemListProps) {
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

  // VISTA 1: LISTA DE CATEGORÍAS (Cuando no hay targetCategory seleccionada)
  if (!targetCategory) {
    return (
      <div className="flex flex-col gap-10 px-4 md:px-0">
        {categories.map((s, i) => (
          <div key={i}>
            <div className="section-title-container p-4">
              <span className="font-bold text-[18.6019px]">{s.section}</span>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
    <main className="flex flex-col px-4 md:px-20 lg:px-88">
      {targetCategory.sections.map((s, i) => (
        <div key={i} className="mb-10 lg:mb-25">
          <div className="section-title-container p-4">
            <span className="font-bold text-[18.6019px]">{s.sectionTitle}</span>
          </div>
          {/* CAMBIOS RESPONSIVE:
             - grid-cols-1 en móvil.
             - md:grid-cols-2 en tablet.
             - lg:grid-cols-3 en escritorio (original).
             - gap-6 en móvil (más compacto), gap-10 (original) en escritorio.
          */}
          <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
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
}
