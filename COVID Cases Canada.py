# YouTube Link:https://www.youtube.com/watch?v=87Gx3U0BDlo
#This is from the FCC tutorial as well

# Let's obtain the links from the following website:
# https://www.whitehouse.gov/briefings-statements/

# One of the things this website consists of is records of presidential
# briefings and statements.

# Goal: Extract all of the links on the page that point to the
# briefings and statements.

import requests
from bs4 import BeautifulSoup

result = requests.get("https://www.worldometers.info/coronavirus/?utm_campaign=homeAdvegas1?%22%20%5Cl%22countries")
src = result.content
soup = BeautifulSoup(src, 'lxml')


mydivs = soup.find_all("div", {"class": "container"}, {"class": "row"})

print(mydivs)

"""
urls = []

for h2_tag in soup.find_all("h2"):
    a_tag=h2_tag.find('a')
    #This avoids the an error that will pop up if the href attribute is non-existent
    if a_tag is not None:
        urls.append(a_tag.attrs['href'])

for i in urls:
    print(i)
"""


