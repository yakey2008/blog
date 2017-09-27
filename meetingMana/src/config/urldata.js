//请求的地址及根目录
export default {
    basePath:"/",
    CurrentUserInfo: 'api/Meeting/CurrentUserInfo',//当前登录人信息
    GetAllRoomListAndRoom:'api/Meeting/GetAllRoomListAndRoom',//获取所有会议室列表和会议室的映射关系
    MyCalendar: 'api/Meeting/MyCalendar',//我的日程
    CreateMeeting: 'api/Meeting/CreateMeeting',//创建会议
    UpdateMeeting:'api/Meeting/UpdateMeeting',//更新会议
    GetAllPosition: 'api/Meeting/GetAllPosition',//获取所有位置
    SearchRooms:'api/Meeting/SearchRooms',//搜索可用会议室
    GetRoomsStatus:'api/Meeting/GetRoomsStatus',//获取某个位置下所有会议室状态
    ResponseMeeting:'api/Meeting/ResponseMeeting',//接受、谢绝会议
    CancelMeeting:'api/Meeting/CancelMeeting',//取消会议
    GetServiceNotification:'api/Meeting/GetServiceNotification',//会议通知列表
    SearchMyMeeting:'api/Meeting/SearchMyMeeting',//我的会议
    PersonSetting:'api/Meeting/PersonSetting',//获取设置通知页信息
    SetPersonSetting:'api/Meeting/SetPersonSetting',//设置通知页设置
    GetMeetingDetail:'api/Meeting/GetMeetingDetail',//返回就是一个会议的详情信息，其数据结构是MyCalendar接口返回数据数组中的一个
    GetPersonInfo:'api/Meeting/GetPersonInfo'//根据email获取人员信息
}
