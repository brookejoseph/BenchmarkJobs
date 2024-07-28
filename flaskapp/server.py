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
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')
    print(soup)
    print(res)
    return jsonify({'response': soup.prettify()})  # Return HTML as a string inside JSON


@app.route('/helloworld/running', methods=['POST'])
def grabbing_input():
    id = request.get_json()
    
    return jsonify({'response': soup.prettify()}) 

if __name__ == '__main__':
    app.run(debug=True)