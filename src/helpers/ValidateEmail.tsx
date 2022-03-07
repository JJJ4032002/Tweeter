const validateEmail = (email: string) => {
  let pattern = /^\S+@\S+\.\S+$/;
  return pattern.test(email);
};

export default validateEmail;
