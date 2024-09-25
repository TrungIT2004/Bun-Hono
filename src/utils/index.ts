import * as bcrypt from 'bcrypt'

export const hashPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}

export const validatePassword = async (passwordInput: string, accountPassword: string) => {
    const result = await bcrypt.compare(passwordInput, accountPassword)
    return result 
}