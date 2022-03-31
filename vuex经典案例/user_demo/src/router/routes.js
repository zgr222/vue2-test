import Home from '../views/Home'
import Login from '@/views/Login'
import News from '@/views/News'
import User from '@/views/User'
import Loading from '@/views/Loading'

export default [
  { name: 'home', path: '/', component: Home },
  {
    name: 'news', path: '/news', component: News, meta: {
      auth: true
    }
  },
  { name: 'login', path: '/login', component: Login },
  {
    name: 'user', path: '/user', component: User, meta: {
      auth: true
    }
  },
  { name: 'loading', path: '/loading', component: Loading },
]