# Watson Assistant with SDL Machine Translation Edge

Use the code and instructions from this repository to integrate the SDL Machine Translation Edge (MTE) service with Watson Assistant. Integration is achieved using Watson Assistant web chat events [https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-events] and IBM Cloud functions. We use the web chat pre:send and pre:receive events to call IBM Cloud Functions actions. The IBM Cloud Functions actions make calls to SDL MTE REST API. We use the quick translation method of the SDL MTE API to translate. 

![](https://github.com/rodalton/assistant-sdl-mte/blob/main/sequence.jpg)

Using IBM Cloud Functions, create two new actions. One to translate text from the end user being sent to Watson Assistant and another to translate the text returned from Watson Assistant before it's returned to the end user in the web chat UI. 
