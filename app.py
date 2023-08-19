from flask import Flask, render_template

app = Flask(__name__)

@app.route('/profile')
def profile():
    return(render_template('profile.html'))

@app.route('/')
def home():
    return(render_template('index.html'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    