import App from '../app.vue';//入口
import Homepage from '../components/home/home.vue';//首页
import Mtlocationselect from '../components/mtLocationSelect/mtLocationSelect.vue';//选择会议室
import Mttimeselect from '../components/mtTimeSelect/mtTimeSelect.vue';//选择会议时间
import Mtdetail from '../components/mtLaunchMeet/mtLaunchMeet.vue';//新建会议详情
import Mtaddcontact from '../components/mtAddContact/mtAddContact.vue';//通过邮箱添加参会人
import Mtnoticeset from '../components/mtNoticeSet/mtNoticeSet.vue';//会议通知提醒设置
import Mtmeetdetailaccept from '../components/mtMeetDetailAccept/mtMeetDetailAccept.vue';//会议详情(非发起者)
import Mtmeetdetailinvite from '../components/mtMeetDetailInvite/mtMeetDetailInvite.vue';//会议详情(发起者)
import Mtlocationsearch from '../components/mtlocationSearch/mtLocationSearch.vue';//搜索可用会议室
import Mtparticipantslist from '../components/MtParticipantsList/mtParticipantsList.vue';//参会人员列表其他情况
import Mtnoticelist from '../components/mtNoticeList/mtNoticeList.vue';//会议通知列表
import Mtlisttimeline from '../components/mtListTimeline/mtListTimeline.vue';//我的会议查看

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
            },
            {
                path:'/mtnoticelist',
                meta:'false',
                component:Mtnoticelist
            },
            {
                path:'/mtlisttimeline',
                meta:'false',
                component:Mtlisttimeline
            }
        ]
    }
]
