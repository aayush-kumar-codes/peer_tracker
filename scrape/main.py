import requests
import sys
import re
import os
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from concurrent.futures import ThreadPoolExecutor
from dotenv import load_dotenv

load_dotenv()


def scrape_and_save_logo(user_id, base_url, media_dir):
    url = base_url + str(user_id)
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        scripts = soup.find_all("script")

        for script in scripts:
            script_text = script.get_text()
            if "var logoUrl" in script_text or "var clientName" in script_text or "var clientId" in script_text:
                clientid_match = re.search(r'var clientId = \s*(\d+);', script_text)
                logo_url_match = re.search(r'var logoUrl = \'(.*?)\';', script_text)
                username_match = re.search(r'var clientName = \'(.*?)\';', script_text)

                if logo_url_match:
                    logo_url = logo_url_match.group(1)
                    full_logo_url = urljoin(base_url, logo_url)
                    filename = os.path.basename(logo_url)

                    with open(os.path.join(media_dir, f'{filename}.png'), 'wb') as f:
                        logo_response = requests.get(full_logo_url)
                        f.write(logo_response.content)
                    print(f"ClientID: {clientid_match.group(1)}, ClientName: {username_match.group(1)}, LogoUrl: {full_logo_url}")
                    log_message = f"ClientID: {clientid_match.group(1)}, ClientName: {username_match.group(1)}, LogoUrl: {full_logo_url}\n"

                    with open("response_log.txt", 'a') as log:
                        log.write(log_message)
                    return


def scrape_and_save_logos(base_url, start_user_id, end_user_id, media_dir):
    os.makedirs(media_dir, exist_ok=True)
    with ThreadPoolExecutor() as executor:
        executor.map(lambda user_id: scrape_and_save_logo(user_id, base_url, media_dir), range(start_user_id, end_user_id + 1))

# Define the base URL, start and end user IDs, and media directory
base_url = os.getenv("BASE_URL") # "https://peertracker.aon.com/Participant/nl/"
start_user_id = 1
end_user_id = int(sys.argv[1])
media_dir = "media/logos"

# Call the function to scrape and save logos
scrape_and_save_logos(base_url, start_user_id, end_user_id, media_dir)
