export const invalidUsers = {
  invalidEmail: {
    email: 'notanemail',
    password: 'Test123!@#',
    name: 'Invalid Email User'
  },
  invalidPassword: {
    email: 'test@example.com',
    password: '123', // Too short
    name: 'Invalid Password User'
  },
  emptyFields: {
    email: '',
    password: '',
    name: ''
  }
}; 