import os

from flask import Flask
from flask import jsonify
from flask_cors import CORS
from services.moneeda_service import InvalidProduct
from views import blueprint


def create_app():
    app = Flask(__name__)
    app.register_blueprint(blueprint)
    CORS(app, resources=r"/*", headers='Content-Type')

    @app.errorhandler(InvalidProduct)
    def invalid_product(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=os.environ.get("DEBUG", False)
    )
