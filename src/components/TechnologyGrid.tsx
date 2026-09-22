import TechnologyCard from "./TechnologyCardTemp";

type Technology = {
  id: string | number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyGridProps = {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
};

function TechnologyGrid({
  technologies,
  stack,
  onAdd,
}: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {
        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={isAdded}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
}

export default TechnologyGrid;