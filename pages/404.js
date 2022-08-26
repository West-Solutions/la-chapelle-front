import React from "react";
import Link from "@Components/Controls/Button/Link";

const NotFound = () => (
  <div className="h-full container w-full mx-auto text-center pt-8">
    <div className="text-2xl">Error 404</div>
    <div>Cette page n&apos;existe pas</div>
    <div className="mt-4">
      <Link
        src="/"
        color="primary"
        position="center"
        text="Retour à l'accueil"
      />
    </div>
    <div className="w-full flex justify-end">
      <img src="https://c.tenor.com/1zi9Ppr4YDsAAAAj/travolta-lost.gif" />
    </div>
  </div>
);

export default NotFound;
