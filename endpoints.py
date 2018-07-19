import flask
import json
import os

from services.moneeda_service import MoneedaApiService


blueprint = flask.Blueprint("views", __name__)


@blueprint.route("/")
def home():
    return "Hello World!"


@blueprint.route("/products")
def products():
    """
    This route is supposed to return all the shared products in all three
    exchanges.

    This is done by requesting all the products in the exchange
    with the moneeda service and then using this list to form the final list.

    The return is a list of JSON products
    """

    # Create the service object
    moneeda_api_url = os.environ.get("MONEEDA_API_URL")
    auth_token = os.environ.get("MONEEDA_API_TOKEN")

    api_service = MoneedaApiService(
        base_url=moneeda_api_url,
        moneeda_token= auth_token,
    )

    # Get the exchanges we are interested into
    exchange_list = os.environ.get("AVAILABLE_EXCHANGES").split(",")

    try:
        # Get the lists of available products to the given exchange
        products_by_exchange = {
            ex: api_service.get_products_for_exchange(ex)
            for ex in exchange_list
        }

        # Get shared products
        shared_products = _get_shared_products_from_exchanges(products_by_exchange)

        return json.dumps(shared_products)
    except Exception:
        return json.dumps({
            "status": "error",
            "message": "something wrong with moneeda api or processing moneeda data"
        }), 500, {"Content-Type": "application/json"}


def _get_shared_products_from_exchanges(products_by_exchange):
    product_sets = [
        set([x["id"] for x in products]) 
        for products in products_by_exchange.itervalues()
    ]

    shared_product_ids = list(set.intersection(*product_sets))

    return [
        product
        for product in products_by_exchange.itervalues().next()
        if product["id"] in shared_product_ids
    ]
