# Watson Assistant with SDL Machine Translation Edge

###Introduction

Use the code and instructions from this repository to integrate the SDL Machine Translation Edge (MTE) service with Watson Assistant. Integration is achieved using Watson Assistant web chat events [https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-events] and IBM Cloud functions. We use the web chat pre:send and pre:receive events to call IBM Cloud Functions actions. The IBM Cloud Functions actions make calls to SDL MTE REST API. We use the quick translation method of the SDL MTE API to translate. 

###Solution Outline

The sequence diagram below outlines the set of calls made between services. Note the split between pre:send and pre:receive events. chat lang refers to the language the end user language i.e. the language of the end user when asking questions of Watson Assistant and the language the end user expects to receive replies. watson lang is the language used to define intents, entities and ultimately the dialog in Watson Assistant i.e. the language used to train your virtuala assistant. 

![](https://github.com/rodalton/assistant-sdl-mte/blob/main/sequence.jpg)

###Pre-requisites
IBM Cloud account 
SDL Machine Translation Edge 


Using IBM Cloud Functions, create two new actions. One to translate text from the end user being sent to Watson Assistant and another to translate the text returned from Watson Assistant before it's returned to the end user in the web chat UI. 
