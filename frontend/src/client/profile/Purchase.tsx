import { CiCoffeeCup } from "react-icons/ci";
import { useCart } from "../../context/CartContext";

export const Purchase = () => {
  const { purchaseHistory } = useCart();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(amount);
  };

  return (
    <div className="p-5">
      <PurchaseTitle />
      <div className="flex flex-row gap-5 overflow-x-scroll lg:w-235 mt-5 pb-4 min:grid grid-cols-2">
        {purchaseHistory.length > 0 ? (
          purchaseHistory
            .slice()
            .reverse()
            .map((c, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[300px] p-4 border border-gray-300 rounded-xl shadow-sm bg-white snap-center flex flex-col h-[350px]"
              >
                {/* Encabezado de la Tarjeta */}
                <div className="border-b pb-2 mb-2">
                  <p className="text-sm text-gray-500">Fecha de compra</p>
                  <span className="text-lg font-bold text-gray-800">
                    {c.date}
                  </span>
                </div>

                {/* Lista de Productos (Scrollable internamente) */}
                <div className="flex-1 overflow-y-auto mb-2 pr-1">
                  <span className="text-sm font-semibold text-gray-600 block mb-1">
                    Resumen del pedido:
                  </span>
                  <ul className="flex flex-col gap-1 pl-6">
                    {c.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm font-light list-disc text-gray-700"
                      >
                        {/* Mostramos Cantidad x Título */}
                        <span className="font-medium">
                          {item.currentItemCount}x{" "}
                        </span>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pie de la tarjeta con el Total */}
                <div className="mt-auto pt-3 flex flex-row gap-3 items-center bg-gray-50 -mx-4 -mb-4 p-4 rounded-b-xl">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-[#1e3932]">
                    {formatCurrency(c.total)}
                  </span>
                </div>
              </div>
            ))
        ) : (
          <div className="w-full text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <span className="text-gray-400 font-light text-lg">
              Aún no has realizado ninguna compra.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const PurchaseTitle = () => {
  return (
    <header>
      <div className="flex flex-row items-center gap-1.5">
        <CiCoffeeCup size={32} />
        <span className="font-semibold text-[23px]">Mis compras</span>
      </div>
      <hr className="text-gray-400" />
    </header>
  );
};

/*
import { CiCoffeeCup } from "react-icons/ci";
import { useCart } from "../../context/CartContext";

export const Purchase = () => {
  const { purchaseHistory } = useCart();

  // Función auxiliar para formatear dinero
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(amount);
  };

  return (
    <div className="p-5">
      <PurchaseTitle />
      
      <div className="
        flex flex-row gap-5 mt-5 pb-4 overflow-x-auto snap-x 
        md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible md:pb-0
      ">
        {purchaseHistory.length > 0 ? (
          purchaseHistory
            .slice()
            .reverse()
            .map((c, i) => (
              <div
                key={i}
                // CAMBIO RESPONSIVE EN TARJETA:
                // - Mobile: Mantiene tus anchos fijos (min-w-[300px]).
                // - Desktop: Resetea el ancho (md:w-full) para llenar la celda de la grilla.
                className="
                  min-w-[300px] max-w-[300px] 
                  md:min-w-0 md:max-w-none md:w-full
                  p-4 border border-gray-300 rounded-xl shadow-sm bg-white snap-center flex flex-col h-[350px]
                "
              >
                <div className="border-b pb-2 mb-2">
                  <p className="text-sm text-gray-500">Fecha de compra</p>
                  <span className="text-lg font-bold text-gray-800">
                    {c.date}
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto mb-2 pr-1">
                  <span className="text-sm font-semibold text-gray-600 block mb-1">
                    Resumen del pedido:
                  </span>
                  <ul className="flex flex-col gap-1 pl-6">
                    {c.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm font-light list-disc text-gray-700"
                      >
                        <span className="font-medium">
                          {item.currentItemCount}x{" "}
                        </span>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-3 flex flex-row gap-3 items-center bg-gray-50 -mx-4 -mb-4 p-4 rounded-b-xl">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-[#1e3932]">
                    {formatCurrency(c.total)}
                  </span>
                </div>
              </div>
            ))
        ) : (

          <div className="md:col-span-full w-full text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <span className="text-gray-400 font-light text-lg">
              Aún no has realizado ninguna compra.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const PurchaseTitle = () => {
  return (
    <header>
      <div className="flex flex-row items-center gap-1.5">
        <CiCoffeeCup size={32} />
        <span className="font-semibold text-[23px]">Mis compras</span>
      </div>
      <hr className="text-gray-400" />
    </header>
  );
};
*/
