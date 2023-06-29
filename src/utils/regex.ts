export const REGEX = {
  INPUT_FIELD: {
    EXPRESSION: /^(?!^\d+$)[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$/,
    MSG: "Only letters, numbers and one space are allowed",
  },

  PASSWORD_FIELD: {
    EXPRESSION: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/,
    MSG: "Password must have minimum eight characters, at least one letter and one number",
  },
};
