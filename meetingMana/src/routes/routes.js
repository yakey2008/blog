import App from '../app.vue';
import Homepage from '../components/home/home.vue';
import Mtlocationselect from '../components/mtLocationSelect/mtLocationSelect.vue';
import Mttimeselect from '../components/mtTimeSelect/mtTimeSelect.vue';
import Mtdetail from '../components/mtLaunchMeet/mtLaunchMeet.vue';
import Mtaddcontact from '../components/mtAddContact/mtAddContact.vue';
import Mtnoticeset from '../components/mtNoticeSet/mtNoticeSet.vue';
import Mtmeetdetailaccept from '../components/mtMeetDetailAccept/mtMeetDetailAccept.vue';
import Mtmeetdetailinvite from '../components/mtMeetDetailInvite/mtMeetDetailInvite.vue';
import Mtlocationsearch from '../components/mtlocationSearch/mtLocationSearch.vue';
import Mtparticipantslist from '../components/MtParticipantsList/mtParticipantsList.vue';


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
                path:'/mtaddcontact',
                meta:'false',
                component:Mtaddcontact
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
            },
            {
                path:'/mtlocationsearch',
                meta:'false',
                component:Mtlocationsearch
            },
            {
                path:'/mtparticipantslist',
                meta:'false',
                component:Mtparticipantslist
            }
        ]
    }
]