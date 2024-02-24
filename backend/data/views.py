import json
from django.http import JsonResponse
from rest_framework.views import APIView
import pandas as pd
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import permissions
from django.contrib.auth import logout
from .models import User
from django.contrib.auth.hashers import check_password


class LoginAPI(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User with this email does not exist'}, status=404)

        if check_password(password, user.password):
            refresh = RefreshToken.for_user(user)
            return JsonResponse({
                "id": user.id,
                'email': user.email,
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            })
        else:
            return JsonResponse({'error': 'Invalid password'}, status=401)


class LogoutAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args):
        logout(request)
        return JsonResponse({"message": "Logout successfully.", "status": 200}, status=200)


def read_file_data(filename):
    with open(filename, 'r') as file:
        data = file.read()
    return data

def serialize_to_json(data):
    try:
        json_data = json.loads(data)
        return json_data
    except json.JSONDecodeError:
        # Handle error if the data is not in valid JSON format
        return {"error": "Invalid JSON format in the file"}


class CompTSRData(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        data = request.data
        if 'id' not in data:
            return JsonResponse({"Error": "Please provide id"}, status=400)

        filename = None
        if data['id'] == 4386:
            filename = 'dummy_data/CompTSR1.txt'
        elif data['id'] == 4092:
            filename = 'dummy_data/CompTSR2.txt'
        elif data['id'] == 3714:
            filename = 'dummy_data/CompTSR3.txt'
        else:
            return JsonResponse({"Error": "Invalid id provided"}, status=400)

        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)


class PayoutData(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if 'id' not in data:
            return JsonResponse({"Error": "Please provide id"}, status=400)

        filename = None
        if data['id'] == 4386:
            filename = 'dummy_data/Payout1.txt'
        elif data['id'] == 4092:
            filename = 'dummy_data/Payout2.txt'
        elif data['id'] == 3714:
            filename = 'dummy_data/Payout3.txt'
        else:
            return JsonResponse({"Error": "Invalid id provided"}, status=400)

        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)


class PercentilesData(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if data['id']==4386:
            filename = 'dummy_data/Percentiles1.txt'
        elif data['id']==4092:
            filename = 'dummy_data/Percentiles2.txt'
        elif data['id']==3714:
            filename = 'dummy_data/Percentiles3.txt'
        else:
            return JsonResponse({"Error": "Invalid id provided"}, status=400)
        data = read_file_data(filename)
        json_data = serialize_to_json(data)
        
        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)


class TsrData(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if 'id' not in data:
            return JsonResponse({"Error": "Please provide id"}, status=400)

        filename = None
        if data['id'] == 4386:
            filename = 'dummy_data/Tsr1.txt'
        elif data['id'] == 4092:
            filename = 'dummy_data/Tsr2.txt'
        elif data['id'] == 3714:
            filename = 'dummy_data/Tsr3.txt'
        elif data['id'] == 3366:
            filename = 'dummy_data/Tsr4.txt'
        elif data['id'] == 3004:
            filename = 'dummy_data/Tsr5.txt'
        elif data['id'] == 2515:
            filename = 'dummy_data/Tsr6.txt'
        elif data['id'] == 2607:
            filename = 'dummy_data/Tsr7.txt'
        elif data['id'] == 2665:
            filename = 'dummy_data/Tsr8.txt'
        else:
            return JsonResponse({"Error": "Invalid id provided"}, status=400)

        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)


class SummaryCalcData(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if 'id' not in data:
            return JsonResponse({"Error": "Please provide id"}, status=400)

        filename = None
        if data['id'] == 4386:
            filename = 'dummy_data/SummaryCal1.txt'
        elif data['id'] == 4092:
            filename = 'dummy_data/SummaryCal2.txt'
        elif data['id'] == 3714:
            filename = 'dummy_data/SummaryCal3.txt'
        else:
            return JsonResponse({"Error": "Invalid id provided"}, status=400)

        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)


class SummaryPercentData(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if 'id' not in data:
            return JsonResponse({"Error": "Please provide id"}, status=400)

        filename = None
        if data['id'] == 4386:
            filename = 'dummy_data/SummaryPercent1.txt'
        elif data['id'] == 4092:
            filename = 'dummy_data/SummaryPercent2.txt'
        elif data['id'] == 3714:
            filename = 'dummy_data/SummaryPercent3.txt'
        else:
            return JsonResponse({"Error": "Invalid id provided"}, status=400)

        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)
        

class SummaryPData(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if 'id' not in data:
            return JsonResponse({"Error": "Please provide id"}, status=400)

        filename = None
        if data['id'] == 4386:
            filename = 'dummy_data/SummaryP1.txt'
        elif data['id'] == 4092:
            filename = 'dummy_data/SummaryP2.txt'
        elif data['id'] == 3714:
            filename = 'dummy_data/SummaryP3.txt'
        elif data['id'] == 3366:
            filename = 'dummy_data/SummaryP4.txt'
        elif data['id'] == 3004:
            filename = 'dummy_data/SummaryP5.txt'
        elif data['id'] == 2515:
            filename = 'dummy_data/SummaryP6.txt'
        elif data['id'] == 2607:
            filename = 'dummy_data/SummaryP7.txt'
        elif data['id'] == 2665:
            filename = 'dummy_data/SummaryP8.txt'
        else:
            return JsonResponse({"Error": "Invalid id provided"}, status=400)

        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)


class SharePriceData(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        filename = 'SharePrice.txt'
        data = read_file_data(filename)
        json_data = serialize_to_json(data)
        
        try:
            file_data = read_file_data(filename)
            json_data = serialize_to_json(file_data)
            return JsonResponse(json_data, status=200)
        except Exception as e:
            return JsonResponse({"Error": str(e)}, status=500)

class DownloadPeerTSR(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if data['id'] == 4386:
            filename = 'dummy_data/PeerTSRs1.xlsx'
        elif data['id'] == 4092:
            filename = 'dummy_data/PeerTSRs2.xlsx'
        elif data['id'] == 3714:
            filename = 'dummy_data/PeerTSRs3.xlsx'

        # Read the Excel file into a pandas DataFrame
        df = pd.read_excel(filename)

        # Convert the DataFrame to a JSON object
        json_data = df.to_json(orient='records')

        # Return the JSON response
        return JsonResponse(json_data, safe=False)


class DownloadHistoTSR(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if data['id'] == 4386:
            filename = 'dummy_data/HistoricalTSRs1.xlsx'
        elif data['id'] == 4092:
            filename = 'dummy_data/HistoricalTSRs2.xlsx'
        elif data['id'] == 3714:
            filename = 'dummy_data/HistoricalTSRs3.xlsx'

        # Read the Excel file into a pandas DataFrame
        df = pd.read_excel(filename)

        # Convert the DataFrame to a JSON object
        json_data = df.to_json(orient='records')

        # Return the JSON response
        return JsonResponse(json_data, safe=False)


class DownloadTSRCalc(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        if data['id'] == 4386:
            filename = 'dummy_data/TSRCalculationDetails1.xlsx'
        elif data['id'] == 4092:
            filename = 'dummy_data/TSRCalculationDetails2.xlsx'
        elif data['id'] == 3714:
            filename = 'dummy_data/TSRCalculationDetails3.xlsx'

        # Read the Excel file into a pandas DataFrame
        df = pd.read_excel(filename)

        # Convert the DataFrame to a JSON object
        json_data = df.to_json(orient='records')

        # Return the JSON response
        return JsonResponse(json_data, safe=False)
