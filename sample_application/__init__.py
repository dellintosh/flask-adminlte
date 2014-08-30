from flask import Flask, render_template
from flask_adminlte import AdminLTE


def create_app(configfile=None):
    app = Flask(__name__)
    AdminLTE(app)

    @app.route('/')
    def index():
        return render_template('index.html')

    return app

if __name__ == '__main__':
    create_app().run(debug=True)
