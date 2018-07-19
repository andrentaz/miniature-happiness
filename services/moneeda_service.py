import requests


class MoneedaApiService(object):
    """
    docstring for MoneedaApiService

    This service is supposed to take care of the communication and requests that
    are required in order to get data from Moneeda API
    """

    def __init__(self, base_url, moneeda_token):
        super(MoneedaApiService, self).__init__()
        self.base_url = base_url
        self.moneeda_token = moneeda_token

    def _get_default_header(self):
        return {
            "Content-Type": "application/json",
            "Authorization": "Bearer {token}".format(token=self.moneeda_token),
        }

    def get_products_for_exchange(self, exchange):
        response = requests.get(
            "{}/exchanges/{}/products".format(self.base_url, exchange),
            headers=self._get_default_header(),
        )

        return response.json()
