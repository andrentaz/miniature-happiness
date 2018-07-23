import flask
import os

from services.moneeda_service import MoneedaApiService


blueprint = flask.Blueprint("views", __name__)
moneeda_service_object = None

@blueprint.route("/")
def home():
    return "Hello World!"


@blueprint.route("/products", methods=['GET'])
def products():
    """
    This route is supposed to return all the shared products in all three
    exchanges.

    This is done by requesting all the products in the exchange
    with the moneeda service and then using this list to form the final list.

    The return is a list of JSON products
    """

    # Get the service object
    api_service = _moneeda_service()

    # Get the exchanges we are interested into
    exchange_list = os.environ.get("AVAILABLE_EXCHANGES").split(",")

    # Get the lists of available products to the given exchange
    products_by_exchange = {
        ex: api_service.get_products_for_exchange(ex)
        for ex in exchange_list
    }

    # Get shared products
    shared_products = _get_shared_products_from_exchanges(products_by_exchange)

    return flask.jsonify(shared_products)


@blueprint.route("/products/<product_id>/prices", methods=['GET'])
def prices(product_id):
    """
    This route is supposed to return all the prices of products in all three
    exchanges.

    The route receives the product_id and then uses the service to communicate
    with the API and get the price

    
    """

    # Get the service object 
    api_service = _moneeda_service()

    # Get the exchanges
    exchange_list = os.environ.get("AVAILABLE_EXCHANGES").split(",")

    return flask.jsonify([
        api_service.get_product_price_for_exchange(product_id, ex)
        for ex in exchange_list
    ])

def _moneeda_service():
    """
    This method returns a singleton object to deal with Moneeda API
    """
    global moneeda_service_object
    if not moneeda_service_object:
        # Create the service object
        moneeda_api_url = os.environ.get("MONEEDA_API_URL")
        auth_token = os.environ.get("MONEEDA_API_TOKEN")

        moneeda_service_object = MoneedaApiService(
            base_url=moneeda_api_url,
            moneeda_token= auth_token,
        )

    return moneeda_service_object


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
