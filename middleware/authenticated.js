const allowPagesWhenNotLogin = ['login', 'signup', 'forgot-password']

export default function ({ app, route, redirect }) {
  if (!app.$cookies.get('loggedIn')) {
    if (!allowPagesWhenNotLogin.includes(route.name)) {
      return redirect('/login')
    }
  } else if (allowPagesWhenNotLogin.includes(route.name)) {
    return redirect('/')
  }
}
