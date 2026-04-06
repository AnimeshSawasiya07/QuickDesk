export const isEmpty = (value) => {
  return !value || !value.trim();
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isStrongPassword = (password) => {
  const passwordRegex =/^(?=.*\d).{6,}$/;
  return passwordRegex.test(password);
};
