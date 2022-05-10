export const getPosition = position => {
  let output = "center";
  if (position && position.data && position.data.attributes)
    output = position.data.attributes.value;

  return output;
};
