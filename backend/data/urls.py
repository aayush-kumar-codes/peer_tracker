# yourappname/urls.py
from django.urls import path
from .views import (
    FetchGetHistoricalTSRValuesData, FetchGetHistoricalPayoutsData,
    FetchGetPeerGraphDataData,FetchPeersData, FetchSubPlanData,
    FetchSummaryData, FetchSummaryCalulatedData, FetchPayoutSchedulesData,
    FetchGetPlanInfoData, FetchGetCalculatedValuesBendTableData,
    FetchGetHistoricalIMValuesData, FetchGetHistoricalIMPayoutsData,
    FetchClientParametersData, FetchPlanData, DownloadTSRFile, DownloadPeerTSRFile,
    DownloadHistoricalTSRFile
)

urlpatterns = [
    path('user_info/', FetchClientParametersData.as_view(), name='user_info'),
    path('histo_tsr/', FetchGetHistoricalTSRValuesData.as_view(), name='histo_trs_data'),
    path('payout/', FetchGetHistoricalPayoutsData.as_view(), name='payout_data'),
    path('tsr/', FetchGetPeerGraphDataData.as_view(), name='tsr_data'),
    path('peer_result/', FetchPeersData.as_view(), name='peer_result'),
    path('plan/', FetchPlanData.as_view(), name='plan'),
    path('sub_plan/', FetchSubPlanData.as_view(), name='sub_plan'),
    path('summary/', FetchSummaryData.as_view(), name='summary_data'),
    path('summary_calculated/', FetchSummaryCalulatedData.as_view(), name='summary_calculated_data'),
    path('payout_schedules/', FetchPayoutSchedulesData.as_view(), name='payout_schedules'),
    path('plan_info/', FetchGetPlanInfoData.as_view(), name='plan_info'),
    path('cal_bend_value/', FetchGetCalculatedValuesBendTableData.as_view(), name='cal_bend_value'),
    path('histo_m_val/', FetchGetHistoricalIMValuesData.as_view(), name='histo_m_val'),
    path('histo_m_payout/', FetchGetHistoricalIMPayoutsData.as_view(), name='histo_m_payout'),
    
    path('tsr_file/', DownloadTSRFile.as_view(), name='tsr_file'),
    path('peer_tsr_file/', DownloadPeerTSRFile.as_view(), name='peertsr_file'),
    path('histo_tsr_file/', DownloadHistoricalTSRFile.as_view(), name='histotsr_file'),

]
