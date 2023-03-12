import os
from flask import Flask
from flask import Flask, send_from_directory

CURRENT_DIR = os.path.dirname(__file__)
client_folder = CURRENT_DIR + '/../client/build/'
# app = Flask(__name__, static_folder=client_folder)
app = Flask(__name__)

@app.route('/ahoy')
def profile():
    response_body = {
        'response': 'This is the way',
    }
    return response_body