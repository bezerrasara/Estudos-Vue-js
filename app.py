
from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests
from tinydb import TinyDB, Query
from flask_socketio import SocketIO, emit 

app = Flask(__name__,
            static_folder="./dist/static",
            template_folder="./dist")

db = TinyDB('db.json')
Dado = Query()

cors = CORS(app, resources={r"/api/*" : {"origins": "*"}})

socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/', defaults={'path': ''}, methods=['GET', 'POST'])
@app.route('/<path:path>', methods=['GET', 'POST'])

def catch_all(path): #onde todos os caminhos são passados

    if app.debug: 
        return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")

@app.route('/api/dados', methods=['GET', 'POST'])
def back_end():
    return jsonify(db.all())

@socketio.on('connect')
def client_connect():
    emit('on_connect', 'Conectado')

@socketio.on('message')
def message(message):
    emit('message', {
        'id': message['id'],
        'user': message['user'],
        'text': message['text'],
        'avatar':message['avatar']
        
        }, broadcast = True)



if __name__ == "__main__":
    print("server is running on localhost!!")
    socketio.run(app, port=3000)
    