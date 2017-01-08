const index_children=[
{
    path:'a',
    component: (resolve) => {
        require(['./views/a.vue'], resolve)
    }
},
{
    path:'b',
    component: (resolve) => {
        require(['./views/b.vue'], resolve)
    }
},
{
    path:'',
    component: (resolve) => {
        require(['./views/a.vue'], resolve)
    }
}]


export default [
{
    path:'/index',
    meta: { requiresAuth: true },
    component: (resolve) => {
        require(['./views/index.vue'], resolve)
    },
    children:index_children
},
{
    path:'/other',
    component: (resolve) => {
        require(['./views/other.vue'], resolve)
    }
},
{
    path:'*',
    meta: { requiresAuth: true },
    component: resolve => {
        require(['./views/index.vue'], resolve)
    },
    children:index_children
}
]
