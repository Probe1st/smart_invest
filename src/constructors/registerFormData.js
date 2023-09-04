export default function RegisterFormData(
  surname,
  name,
  tg,
  email,
  pass,
  repPass,
  purshes,
) {
  return {
    dataForCreateAccount: {
      email,
      pass,
      repPass,
    },
    dataForCreateCardUser: {
      surname,
      name,
      tg,
      balance: {
        number: 50,
        currency: "$",
      },
      referals: 0,
      purshes: [
        purshes,
      ]
    },
  };
}
