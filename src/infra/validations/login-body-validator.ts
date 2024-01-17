import * as yup from "yup"

export async function loginBodyValidator(body: any) {
  const bodyValidator = yup.object({
    cpf:  yup.string().required(),
    password:  yup.string().required(),
  })

  try {
    await bodyValidator.validate(body)
    return { isValid: true }
  } catch(err: any) {
    return { isValid: false, message: err.errors }
  }
}