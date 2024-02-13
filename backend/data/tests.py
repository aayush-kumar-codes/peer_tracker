from urllib.request import urlopen
import json

link = "https://peertracker.aon.com/Participant/nl/583/CalculatedValues/4386"

try:
    with urlopen(link) as f:
        myfile = f.read()

        # Print the content as a string
        # print("Response Content:")
        # print(myfile.decode('utf-8'))
        print("\nHeaders:")

        # Loop through headers and print them
        for header, value in f.getheaders():
            print(f"{header}: {value}")

except Exception as e:
    print(f"Error: {e}")
