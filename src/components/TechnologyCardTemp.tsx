type Technology = {
  id: string | number;
  icon: string;
  name: string;
  badge: string;
  description: string;
  category: string;
  difficulty: string;
  rating: number;
};

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg">

      <div className="flex items-start justify-between gap-4">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-14 w-14 object-contain"
        />

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {technology.name}
      </h3>

      <p className="mt-3 grow text-sm leading-6 text-slate-600">
        {technology.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>

          <span className="font-semibold">
            {technology.rating}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-green-100 text-green-700"
              : "gradient-bg text-white hover:opacity-90"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
}

export default TechnologyCard;