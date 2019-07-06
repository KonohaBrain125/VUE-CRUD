export default {
  api: 'http://crm-api.id-a.pl/api',
  prefix: 'auth',
  paths: {
    login: 'login',
    logout: 'logout',
    getUser: 'user',
    refreshToken: 'refresh-token',
    editUser: 'user',
    changePassword: 'user-password'
  },
  loginWithEmail: true,
  loginFieldName: 'email',
  loginEditable: true,
  loginMinLength: 4,
  loginMaxLength: 100,
  loginRegex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  passwordFieldName: 'password',
  passwordEditable: true,
  passwordMinLength: 1,
  passwordMaxLength: 100,
  customFields: [
    {
      name: 'name',
      regex: /^.{0,100}$/,
      editable: true,
      minLength: 0,
      maxLength: 100,
      required: true
    }
  ]
}
