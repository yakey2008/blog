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
    SearchMyMeeting:'api/Meeting/SearchMyMeeting'//我的会议
}
