import App from '../app.vue';
import Homepage from '../components/home/home.vue';
import Mtlocationselect from '../components/mtLocationSelect/mtLocationSelect.vue';
import Mttimeselect from '../components/mtTimeSelect/mtTimeSelect.vue';
import Mtdetail from '../components/mtLaunchMeet/mtLaunchMeet.vue';
import Mtaddcontarct from '../components/mtAddContarct/mtAddContarct.vue';
import Mtnoticeset from '../components/mtNoticeSet/mtNoticeSet.vue';
import Mtmeetdetailaccept from '../components/mtMeetDetailAccept/mtMeetDetailAccept.vue';
import Mtmeetdetailinvite from '../components/mtMeetDetailInvite/mtMeetDetailInvite.vue';

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
            {
                path:'/mttimeselect',
                meta:'false',
                component:Mttimeselect
            },
            {
                path:'/mtlaunchmeet',
                meta:'false',
                component:Mtdetail
            },
            {
                path:'/mtaddcontarct',
                meta:'false',
                component:Mtaddcontarct
            },
            {
                path:'/mtnoticeset',
                meta:'false',
                component:Mtnoticeset
            },
            {
                path:'/mtmeetdetailaccept',
                meta:'false',
                component:Mtmeetdetailaccept
            },
            {
                path:'/mtmeetdetailinvite',
                meta:'false',
                component:Mtmeetdetailinvite
            }
        ]
    }
]