const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue')},
      { path: 'register', name: 'register', component: () => import('pages/Register.vue')},
      { path: 'forgotPassword', name: 'forgotPassword', component: () => import('pages/ForgotPassword.vue')}
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'posts', name: 'PostsPage', component: () => import('pages/Posts.vue')},
      { path: 'post', name: 'PostPage', component: () => import('pages/Post.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
