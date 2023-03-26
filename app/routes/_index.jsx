import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex ">
          <div className="mx-auto mt-16 max-w-7xl text-center">
            <Link to="/projet" className="text-xl text-blue-600 underline">
              Projets
            </Link>
          </div>
          <div className="mx-auto mt-16 max-w-7xl text-center">
            <Link to="/cv" className="text-xl text-blue-600 underline">
              CV
            </Link>
          </div>
          <div className="mx-auto mt-16 max-w-7xl text-center">
            <Link to="/me" className="text-xl text-blue-600 underline">
              Mieux me connaitre
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
