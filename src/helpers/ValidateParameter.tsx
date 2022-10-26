const ValidateParameter = (email: string, pattern: RegExp) => {
  return pattern.test(email);
};

export default ValidateParameter;
