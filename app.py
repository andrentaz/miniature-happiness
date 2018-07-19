import os

from flask import Flask
from endpoints import blueprint


def create_app():
    app = Flask(__name__)
    app.register_blueprint(blueprint)
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=os.environ.get("DEBUG", False)
    )
