import pandas as pd 
from flask import Flask, request
from flask import jsonify
import requests 
from bs4 import BeautifulSoup


app = Flask(__name__)

@app.route('/helloworld')
def hello():
    return {'hello': 'world'}

@app.route('/helloworld/grabbinginput', methods=['POST'])
def grabbing_input():
    data = request.get_json()
    print(data)
    url = data['benchmarkUrl'] 
    name = data['benchmarkName']
    print('url', url)
    print('name', name)
    database.append({"url": url, "name": name, "status": "submitted"})
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')
    value = soup.find(id="dark-mode-native-sheet")
    return jsonify({'response': value})

def submit_data():
    data = request.get_json()
    print(data)
    return jsonify({'response': data})



database = [
        {"url": 1, "name": "John Doe", "status": "submitted"},
        {"url": 2, "name": "Jane Doe", "status": "complete"}
        ]


if __name__ == '__main__':
    app.run(debug=True)