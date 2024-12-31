const validate = ({ name, email, password }) => {
  const errors = {};
  // eslint-disable-next-line
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const nameValid = /^[0-9A-Za-z]{3,16}$/.test(name);
  const passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  const passMsg = (
    <>
      <p>Your password must have:</p>
      <ul>
        <li>8 characters long</li>
        <li>1 uppercase & 1 lowercase character</li>
        <li>1 number</li>
      </ul>
    </>
  );
  errors.password = !passValid ? passMsg : "";
  errors.email = !emailValid ? "Not valid Email" : "";
  errors.name = !nameValid ? "UsernName not Valid" : "";

  if (errors.name === "" && errors.password === "" && errors.email === "")
    errors.success = true;
  else errors.success = false;
  return errors;
};

export default validate;
