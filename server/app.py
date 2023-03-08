from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def profile():
    response_body = {
        'name': 'John Doe',
        'greeting': 'Ahoy-hoy!'
    }
    return response_body