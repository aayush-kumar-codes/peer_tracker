from bs4 import BeautifulSoup
import requests


def get_authorization_code(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            script_tags = soup.find_all('script', string=lambda text: text and 'var AuthenticationToken' in text)
            if script_tags:
                for script_tag in script_tags:
                    lines = script_tag.string.split(';')
                    for line in lines:
                        if 'var AuthenticationToken' in line:
                            authentication_token = line.split('=')[1].strip()
                            authentication_token = authentication_token.strip("'")
                            return authentication_token
                print("AuthenticationToken variable not found in script content.")
            else:
                print("No script tag containing 'var AuthenticationToken' found.")
                return None
        else:
            print(f"Failed to fetch URL. Status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error: {e}")
