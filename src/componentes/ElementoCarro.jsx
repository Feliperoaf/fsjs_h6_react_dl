import { formatCLP } from "../utils/formatCLP";

const ElementoCarro = ({ item, onInc, onDec }) => {
  return (
    <div className="flex items-center gap-4 my-7 border-2 rounded-2xl p-4 border-black/88">
      <img
        src={item.img}
        alt={item.name}
        className="h-20 w-20 rounded-xl object-cover"
      />

      <h3 className="font-medium flex-1">
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </h3>

      <span className="font-semibold tabular-nums">
        ${formatCLP(item.price)}
      </span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="h-8 w-8 rounded border-2 border-red-400 text-red-600 leading-none grid place-items-center focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => onDec(item.id)}
        >
          –
        </button>

        <span className="w-5 text-center">{item.qty}</span>

        <button
          type="button"
          className="h-8 w-8 rounded border-2 border-blue-500 text-blue-600 leading-none grid place-items-center focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => onInc(item.id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ElementoCarro;
