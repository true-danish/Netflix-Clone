const validate = ({ name, email, password }) => {
  const errors = {};
  // eslint-disable-next-line
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const nameValid = /^[0-9A-Za-z]{6,16}$/.test(name);
  const passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  console.log(emailValid);
  errors.password = !passValid ? "Password not valid. Ex-aA1@ " : "";
  errors.email = !emailValid ? "Not valid Email" : "";

  errors.name = !nameValid ? "UsernName not Valid" : "";

  return errors;
};

export default validate;
