import * as yup from "yup"

export async function createCustomerBodyValidator(body: any) {
  const bodyValidator = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf:  yup.string().required(),
    phone:  yup.string().required(),
    password:  yup.string().required(),
  })

  try {
    await bodyValidator.validate(body)
    return { isValid: true, message: "" }
  } catch(err: any) {
    return { isValid: false, message: err.errors }
  }
}