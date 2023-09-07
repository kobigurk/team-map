team map
--------

small tool to assist remote teams in seeing the time for other team members.

prepare a json file of the format:
```json
[{
  "name": "Kobi Gurkan",
  "location": "31.7683N,35.2137E",
  "imageUrl": "https://pbs.twimg.com/profile_images/1450135683188854787/Gzb5--kd_400x400.jpg",
  "timezone": "Asia/Jerusalem"
}]
```

and load it into the page. 

it will then show the team members on the map, and when clicking on them you'll see their name and current time.

wish list
=========
* persistance of json
* use natural language locations and infer coordinates and timezone
* show on the map the reasonable working hours range by making the other hours dark