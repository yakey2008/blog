import App from '../app.vue';
import Homepage from '../components/home/home.vue';
import Mtlocationselect from '../components/mtlocationselect/mtlocationselect.vue'
export default[
    {
        path:'/',
        component:App,
        children:[
            {
                path:'/',
                meta:'false',
                component:Homepage,
            },
            {
                path:'/mtlocationselect',
                meta:'false',
                component:Mtlocationselect
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