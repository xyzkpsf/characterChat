import os
import openai
from flask import Flask, send_from_directory, request
from urllib.request import urlretrieve


openai.api_key = os.environ.get('API_KEY')

CURRENT_DIR = os.path.dirname(__file__)
client_folder = CURRENT_DIR + '/../client/build/'
# app = Flask(__name__, static_folder=client_folder)
app = Flask(__name__)

messages = [{"role": "system", "content": "You are the main character, Din Djarin, in The Mandalorian TV show. And you will answer my questions"}]

# TODO: Add character handle mapping here

# TODO: check when it's a new chat
@app.route('/chat', methods=['POST'])
def chat():
    req_data = request.get_json()
    print('req_data',req_data)
    try:
        messages.append({"role": "user", "content": "Hi Mando, where is the baby Yoda?"})
        completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
        )
        chat_response = completion.choices[0].message.content
        print("completion",completion)
        print('chat_response',chat_response)
        response_body = {
            'response': chat_response
        }
        return response_body
    except Exception as e:
        print(e)
        return {"response": "Something went wrong"}