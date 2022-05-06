const setCSSVariable = variables => {
  variables.forEach(variable => {
    document.documentElement.style.setProperty(
      variable.name,
      variable.value
    );
  });
};

export default setCSSVariable;
