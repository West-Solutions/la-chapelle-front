export const getPosition = position => {
  let output = "left";
  if (position && position.data && position.data.attributes)
    output = position.data.attributes.value;

  return output;
};
