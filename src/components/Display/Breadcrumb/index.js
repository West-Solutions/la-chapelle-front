import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { getRouteInformation } from "@Utils/core";

import Crumb from "./Crumb";

const Breadcrumb = ({ app }) => {
  const router = useRouter();
  const breadcrumbs = React.useMemo(() => {
    const asPathNestedRoutes = router.asPath.split("/").filter(v => v.length > 0);
    const crumblist = asPathNestedRoutes.map((_, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      const { isLink, title } = getRouteInformation(app.navigation, asPathNestedRoutes.slice(0, idx + 1));
      return { href, text: title, isLink };
    });

    return [{ href: "/", text: "Accueil", isLink: true }, ...crumblist];
  }, [router.asPath]);

  return (
    <div className="bg-zinc-100">
      <div className="flex flex-row gap-2 container mx-auto p-4 pb-0">
        {breadcrumbs.map((crumb, idx) => (
          <Crumb {...crumb} key={crumb.href} last={idx === breadcrumbs.length - 1} />
        ))}
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  app: PropTypes.shape({
    navigation: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
};

export default Breadcrumb;