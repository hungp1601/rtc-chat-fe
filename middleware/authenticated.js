import { ALLOW_PAGE } from '@/constants/allow_pages'

export default function ({ app, route, redirect }) {
  if (!app.$cookies.get('loggedIn')) {
    if (!ALLOW_PAGE.includes(route.name)) {
      return redirect('/login')
    }
  } else if (ALLOW_PAGE.includes(route.name)) {
    return redirect('/')
  }
}
