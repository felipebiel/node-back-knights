#!/bin/bash
.PHONY: default

setup:
	docker network create node-mongo
	docker-compose build	

start:
	docker-compose up

stop: 
	docker-compose stop

