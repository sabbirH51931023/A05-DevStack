import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import TechnologyGrid from "./components/TechnologyGrid";
import Footer from "./components/footer";

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

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technology data from JSON
  useEffect(() => {
     fetch("/tech/tech.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load tech.json");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies!");
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove technology
  const handleRemove = (id: string | number) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Technologies */}
      <main
        id="technologies"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >

        {/* Heading */}
        <div className="mb-10 text-center">

          <span className="gradient-text text-sm font-bold uppercase tracking-wider">
            Explore Technologies
          </span>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Build Your Technology Stack
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Explore popular technologies and add the ones you
            want to your personal developer stack.
          </p>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-75 flex-col items-center justify-center">

            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

            <p className="mt-4 font-medium text-slate-600">
              Loading technologies...
            </p>

          </div>
        ) : technologies.length === 0 ? (

          <div className="py-20 text-center">
            <p className="text-lg text-slate-500">
              No technologies found.
            </p>
          </div>

        ) : (

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">

            {/* Technology cards */}
            <TechnologyGrid
              technologies={technologies}
              stack={stack}
              onAdd={handleAdd}
            />

            {/* Your Stack */}
            <aside className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">

              <div className="mb-5 flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-bold">
                    Your Stack
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {stack.length}{" "}
                    {stack.length === 1
                      ? "technology"
                      : "technologies"}{" "}
                    selected
                  </p>
                </div>

                {stack.length > 0 && (
                  <button
                    type="button"
                    onClick={handleRemoveAll}
                    className="text-sm font-medium text-pink-600 hover:text-pink-700"
                  >
                    Remove All
                  </button>
                )}

              </div>

              {/* Empty */}
              {stack.length === 0 ? (

                <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center">

                  <div className="mb-3 text-4xl">
                    📦
                  </div>

                  <p className="font-medium text-slate-700">
                    Your stack is empty
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Add technologies to build your stack.
                  </p>

                </div>

              ) : (

                <div className="space-y-3">

                  {stack.map((technology) => (

                    <div
                      key={technology.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3"
                    >

                      <div className="flex min-w-0 items-center gap-3">

                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-9 w-9 object-contain"
                        />

                        <div className="min-w-0">

                          <p className="truncate font-semibold">
                            {technology.name}
                          </p>

                          <p className="text-xs text-slate-500">
                            {technology.category}
                          </p>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemove(technology.id)
                        }
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${technology.name}`}
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </aside>

          </div>

        )}

      </main>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >

        <div className="text-center">

          <span className="gradient-text text-sm font-bold uppercase">
            Projects
          </span>

          <h2 className="mt-2 text-3xl font-bold">
            Build Something Amazing
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Use your technology stack to create modern,
            scalable and powerful applications.
          </p>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white py-16"
      >

        <div className="mx-auto max-w-4xl px-4 text-center">

          <span className="gradient-text text-sm font-bold uppercase">
            About Dev Stack
          </span>

          <h2 className="mt-2 text-3xl font-bold">
            Your Personal Technology Explorer
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Dev Stack helps developers explore popular
            technologies, understand their categories and
            difficulty levels, and create a personalized
            technology stack.
          </p>

        </div>

      </section>

      {/* Footer */}
      <Footer />

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

    </div>
  );
}

export default App;