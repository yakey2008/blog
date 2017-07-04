import App from '../app.vue';
import Indexpage from '../components/index/index.vue';
import Feedback from '../components/feedback/feedback.vue'
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
                path:'/feedback',
                meta:'false',
                component:Feedback
            },
            // {
            //     path:'/signin',
            //     component:Signinpage
            // },
            // {
            //     path:'/signout'
            // },
            // {
            //     path:'/personal',
            //     component:Personal
            // }

        ]
    }
]