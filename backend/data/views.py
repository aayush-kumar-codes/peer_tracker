import json
from django.http import JsonResponse
from rest_framework.views import APIView


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
