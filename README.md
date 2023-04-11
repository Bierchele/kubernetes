# GETTING STARTED

1. Minikube Setup
2. Pushing Builds to Kubernetes 
3. Execute Dockerfile


## Minikube Setup
  
  Minikube is local Kubernetes, all you need is Docker.

  macOS - ARM64 Architecture 

  `curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64`
  `sudo install minikube-darwin-arm64 /usr/local/bin/minikube`
  
  open a terminal

  run the command 

  `minikube start` 




## Pushing Builds to Kubernetes (mySql)

open new terminal

execute 

`kubectl create -f kubernetes.yaml `

`kubectl create -f migrate.mysql.yaml `





## Execute Dockerfile

open new Terminal 

run the command 

`eval $(minikube docker-env)`

after that  run 

docker build -t <yourimagename> ./path/to/Dockerfile









# INFOS FOR ME 
### ImagePullPolicy for NodeJS


Pushing local images to kubernetes cluster
https://minikube.sigs.k8s.io/docs/handbook/pushing/