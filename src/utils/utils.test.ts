import { hashPassword, validatePassword } from "./index"

// test('Properly hashing password', async () => {
//     const password = '@Minhtrung1408'
//     const hashedPassword = await hashPassword(password)
//     expect(hashedPassword).toBe('$2b$10$VEPmr08VPaw83/hGdkNwqe3mvB4gHARh6cfAk6a.28bBg9tJl2G.2')
// })

test('Properly validate password', async () => {
    const passwordInput = '@Minhtrung1408'
    const hashedPassword = '$2b$10$VEPmr08VPaw83/hGdkNwqe3mvB4gHARh6cfAk6a.28bBg9tJl2G.2'

    const result = await validatePassword(passwordInput, hashedPassword)
    expect(result).toBe(true)
})