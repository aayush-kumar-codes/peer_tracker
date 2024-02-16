# yourappname/urls.py
from django.urls import path
from .views import (
    CompTSRData, PayoutData, PercentilesData, SharePriceData,
    TsrData, SummaryCalcData, SummaryPercentData, SummaryPData
)

urlpatterns = [
    path('histo_tsr/', CompTSRData.as_view(), name='comp_tsr'),
    path('payout/', PayoutData.as_view(), name='payout'),
    path('percentile/', PercentilesData.as_view(), name='percentile'),
    path('share_price/', SharePriceData.as_view(), name='share_price'),
    path('tsr/', TsrData.as_view(), name='tsr'),
    path('summary_calculated/', SummaryCalcData.as_view(), name='summary_calculated'),
    path('cal_bend_value/', SummaryPercentData.as_view(), name='cal_bend_value'),
    path('summary/', SummaryPData.as_view(), name='summary'),

]
