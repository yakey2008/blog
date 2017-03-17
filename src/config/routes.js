import App from '../app.vue'
import Indexpage from '../components/index/index.vue'
import Signinpage from '../components/signin/signin.vue'
import Personal from '../components/personal/personal.vue'

export default[
    {
        path:'/',
        component:App,
        children:[
            {
                path:'/',
                meta:'false',
                component:Indexpage,
            },
            {
                path:'/signup',
                meta:'false',
                // component:''
            },
            {
                path:'/signin',
                component:Signinpage
            },
            {
                path:'/signout'
            },
            {
                path:'/personal',
                component:Personal
            }

        ]
    }
]