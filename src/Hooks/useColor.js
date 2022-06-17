import React from "react";
import { useRouter } from "next/router";

const useColor = colors => {
  const router = useRouter();

  const getColor = () => {
    const explosedPath = router.pathname.split("/");
    const parentSection = explosedPath && explosedPath[1]
      ? explosedPath[1]
      : "";

    const colorExist = colors.some(
      ({ attributes }) => attributes.var === parentSection
    );

    return colorExist ? parentSection : "primary";
  };

  const [color, setColor] = React.useState(null);

  React.useEffect(() => {
    setColor(getColor());
  }, [router.pathname]);

  return color;
};

export default useColor;
