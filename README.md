Project Description (What I understood)

A card-matching web application built with Python, featuring FastAPI, Firebase authentication, and seamless MongoDB database integration. Users authenticate using Firebase credentials to gain access to the card matching  game. The gameplay features a grid of 12 cards depicting six distinct fruit pairs that players must successfully match. Players who complete the matching challenge in the fewest attempts secure a top position and set a new best score.

What was my Contribution in Project
Containerized the application using Docker to ensure an isolated environment.
Automated the CI/CD pipeline using  GitHub Actions.
First pulled the docker image through a docker compose file & Deployed application on the kali linux  server.
Configured Nginx as a reverse proxy to manage and route incoming web traffic securely over HTTPS. 
Established Cloudflare tunnel on kali linux server to redirect the application on the https url through public internet without exposing the inbound traffic.
