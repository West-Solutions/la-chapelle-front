export const getColor = color => {
  let output = "primary";
  if (color && color.data && color.data.attributes)
    output = color.data.attributes.var;

  return output;
};
