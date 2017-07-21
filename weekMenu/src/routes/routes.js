import App from '../app.vue';
import Weekmenu from '../components/weekmenu/weekmenu.vue';
import Feedback from '../components/feedback/feedback.vue'
export default[
    {
        path:'/',
        component:App,
        children:[
            {
                path:'/',
                meta:'false',
                component:Weekmenu,
            },
            {
                path:'/feedback',
                meta:'false',
                component:Feedback
            }
        ]
    }
]