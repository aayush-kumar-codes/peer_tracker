# yourappname/views.py
import os, requests, io
from django.http import JsonResponse, FileResponse, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from utils.token import get_authorization_code
from dotenv import load_dotenv
import pandas as pd

load_dotenv()

# "2023id=4386, 2022id=4092, 2021id=3714, 2020id=3366, 2019id=3004, 2018id=2515, 2017id=2607, 2016id=2665"

class BaseFetchData(APIView):
    def make_request(self, endpoint):
        url = f"{os.getenv('API_BASE_URL')}{endpoint}" # 'https://peertracker.aon.com/API/API/Participant/'
        token_url = os.getenv('TOKEN_URL') # 'https://peertracker.aon.com/Participant/nl/583/CalculatedValues/4386'
        token = get_authorization_code(token_url)
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9',
            'Authorization': f"{token}="
        }

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            return {"error": str(e)}
    
    def download_request(self, endpoint):
        url = f"{os.getenv('API_URL')}{endpoint}" # 'https://peertracker.aon.com/API/API/Participant/'
        token_url = os.getenv('TOKEN_URL') # 'https://peertracker.aon.com/Participant/nl/583/CalculatedValues/4386'
        token = get_authorization_code(token_url)
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': 'plan3004shares=; plan4386customShares=[""]; plan4092customShares=[""]; plan3714customShares=[""]; _gcl_au=1.1.291487245.1707713076; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Feb+12+2024+10%3A14%3A36+GMT%2B0530+(India+Standard+Time)&version=202308.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=https%3A%2F%2Fwww.aon.com%2Fabout-aon%2Fprivacy.jsp&groups=1%3A1%2C2%3A1%2C3%3A1%2C6%3A1%2CC0004%3A1%2CC0005%3A1; _gid=GA1.2.1858648151.1707713078; FPID=FPID2.2.D53J8bEo21d0jfD7XdZOFl53Zz8%2B3MeEaHdqCCNVDIY%3D.1707713078; FPLC=bqmzAhFFGai2Eqq3TJ9JZYIl9X84k3rBZCJR2RXrSd5QX0RcGQTbaxI1prvA1sdIW%2B10UJMNPNoyvMUghc7Kf7cXgSnFsSTi56lT5d%2BEX4omydN3MjqxO7itltsyvA%3D%3D; _ga=GA1.2.1298718110.1707713078; _fbp=fb.1.1707713080184.350175120; ELOQUA=GUID=E644A4666CBD4DD6BDE1992F49A51F7E; _ga_S2CXP61BY4=GS1.1.1707713078.1.1.1707713092.0.0.0; __RequestVerificationToken_L1BhcnRpY2lwYW50=QSY0EHGvaiP04lDNCPyXrM7ndCCu8acdapLUvzF408Z2-Q9gXfdTYffn2QeckUVrHzkKQ_rpDSxajklO4HPMf02L4qA1; OptanonAlertBoxClosed=2024-02-12T04:49:00.240Z; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Feb+12+2024+10%3A19%3A11+GMT%2B0530+(India+Standard+Time)&version=202306.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=https%3A%2F%2Fwww.aon.com%2Fabout-aon%2Fprivacy.jsp&groups=1%3A1%2C2%3A1%2C3%3A1%2C6%3A1%2CC0004%3A1%2CC0005%3A1; plan3366shares=; TS01a1269d=01c736d3e6e75ff70ac2a45c92d6f2daa154ae6065fc418f7f9c97602ac3b068a8e6408453c1e23d6ecd3dec9f134b1160ba3ea66d460f1e7ec27c0663df9cad9e98f44d66; TS01a1269d=01c736d3e6beb6510e2273411731ba0cb97347b72113daa1cd27f6e9d19f998242bb9e2a72efdf05ed1dab5220235d5831a9ab091a05e3b3fc38f4972fefb283409e378988',
            'Referer': 'https://peertracker.aon.com/Participant/nl/583/CalculatedValues/4386',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"'
        }

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()

            # Save the content to a file
            with open('downloaded_file.xlsx', 'wb') as file:
                file.write(response.content)

            print("Download successful")
            return response.content
        except requests.exceptions.RequestException as e:
            print(f"Error: {e}")


class FetchGetHistoricalTSRValuesData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetHistoricalTSRValues/{year_id}?resultDate=&_=1707295187873")
        return JsonResponse(response)


class FetchGetHistoricalPayoutsData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetHistoricalPayouts/{year_id}?resultDate=&_=1707372617047")
        return JsonResponse(response)

class FetchGetPeerGraphDataData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetPeerGraphData/{year_id}?resultDate=&_=1707372617040")
        return JsonResponse(response)


class FetchPeersData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Results/Peers/{year_id}?resultDate=&_=1707372617015")
        return JsonResponse(response)


class FetchSubPlanData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Results/SubPlan/{year_id}?resultDate=&_=1707372617012")
        return JsonResponse(response)


class FetchSummaryData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetSummaryData/{year_id}?resultDate=&_=1707454635538")
        return JsonResponse(response)


class FetchSummaryCalulatedData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetCalculatedValuesTable/{year_id}?resultDate=&_=1707454635545")
        return JsonResponse(response)


class FetchGetHistoricalIMPayoutsData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetHistoricalIMPayouts/{year_id}?resultDate=&_=1707454635647")
        return JsonResponse(response)


class FetchGetHistoricalIMValuesData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetHistoricalIMValues/{year_id}?resultDate=&_=1707454635650")
        return JsonResponse(response)


class FetchPayoutSchedulesData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetPayoutSchedules/{year_id}?resultDate=&_=1707454635668")
        return JsonResponse(response)


class FetchGetPlanInfoData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetPlanInfo/{year_id}?resultDate=&_=1707454635541")
        return JsonResponse(response)


class FetchGetCalculatedValuesBendTableData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Participant/GetCalculatedValuesBendTable/{year_id}?resultDate=&_=1707454635551")
        return JsonResponse(response)


class FetchClientParametersData(BaseFetchData):
    def post(self, request):
        data = request.data
        user_id = data['user_id']
        response = self.make_request(f"Parameters/ClientParameters/{user_id}?_=1707713351265")
        return JsonResponse(response)


class FetchPlanData(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        response = self.make_request(f"Results/Plan/{year_id}?resultDate=&_=1707713351297")
        return JsonResponse(response)


# https://peertracker.aon.com/Participant/files/publicTsrFile/4386
class DownloadTSRFile(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        file_content = self.download_request(f"Participant/files/publicTsrFile/{year_id}")

        # Use FileResponse to return the file in the response
        # response = FileResponse(io.BytesIO(file_content), content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        # response['Content-Disposition'] = f'attachment; filename="downloaded_file.xlsx"'
        # Assuming the file is in XLSX format
        df = pd.read_excel(io.BytesIO(file_content))

        # Convert DataFrame to JSON
        json_data = df.to_json(orient='records')

        # Return JSON response
        return JsonResponse(json_data, safe=False)


class DownloadPeerTSRFile(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        file_content = self.download_request(f"Participant/files/publicPeerFile/{year_id}")
        # Use FileResponse to return the file in the response
        # response = FileResponse(io.BytesIO(file_content), content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        # response['Content-Disposition'] = f'attachment; filename="downloaded_file.xlsx"'
        # response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        # response['Content-Disposition'] = 'attachment; filename="downloaded_file.xlsx"'
        # response.write(file_content)
        # return response
        # Assuming the file is in XLSX format
        df = pd.read_excel(io.BytesIO(file_content))

        # Convert DataFrame to JSON
        json_data = df.to_json(orient='records')

        # Return JSON response
        return JsonResponse(json_data, safe=False)
    

class DownloadHistoricalTSRFile(BaseFetchData):
    def post(self, request):
        data = request.data
        year_id = data['id']
        file_content = self.download_request(f"Participant/files/publicHistoricalFile/{year_id}")
        # Use FileResponse to return the file in the response
        # response = FileResponse(io.BytesIO(file_content), content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        # response['Content-Disposition'] = f'attachment; filename="downloaded_file.xlsx"'
        # response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        # response['Content-Disposition'] = 'attachment; filename="downloaded_file.xlsx"'
        # response.write(file_content)
        # return response
        # Assuming the file is in XLSX format
        df = pd.read_excel(io.BytesIO(file_content))

        # Convert DataFrame to JSON
        json_data = df.to_json(orient='records')

        # Return JSON response
        return JsonResponse(json_data, safe=False)
