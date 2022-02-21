#!/bin/bash

echo "Applying kubernetes yaml files for deployments/services"
kubectl apply -f deployment-payment.yml
kubectl apply -f payment-service.yml
sleep 2
echo "In order to find the antaeus-service nodeport please use this port"
kubectl get services | grep NodePort

