
function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 lg:sticky lg:top-24 h-fit">

      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl font-bold">
            Your Stack
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {stack.length} Technology{" "}
            {stack.length === 1 ? "Selected" : "Selected"}
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-3">🧰</div>

          <h3 className="font-semibold text-slate-700">
            Your stack is empty
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500">
                  {item.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="w-8 h-8 rounded-full bg-red-50 text-red-500 hover:bg-red-100 font-bold"
                aria-label={`Remove ${item.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default YourStack;