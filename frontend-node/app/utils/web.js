/**
 * This class deals with request errors, in case something goes wrong
 */
class RequestError {
    constructor(message, status, json) {
        this.message = message;
        this.status = status;
        this.json = json;
    }
}

/**
 * This method is a simple implementation of the XMLHttpRequest API
 * @param {string} url - url to make the request
 * @param {object} params - object that describes the fetch
 * @param {number} retries - number of times the API will retry the request
 */
/* eslint-disable no-undef */
const xhr = async (url, params = {}, retries = 0) => {
    const headers = { 'Content-Type': 'application/json', ...params.headers };
    let response;
    let data;

    try {
        // wait for server to respond
        response = await fetch(url, { ...params, headers });

        // everything ok with the request
        if (response.ok) {
            if (
                response.status !== 204 &&
                response.headers.get('Content-Type') &&
                response.headers.get('Content-Type').startsWith('application/json')
            ) {
                return response.json();
            }

            return response;
        }

        // oh no!
        // something went terribly wrong :(
        if (
            response.headers.get('Content-Type') &&
            response.headers.get('Content-Type').startsWith('application/json')
        ) {
            // case there is data in the error
            data = await response.json();
        }

        // unfortunately, reject
        return Promise.reject(new RequestError(response.statusText, response.status, data));
    } catch (error) {
        if (retries > 0) {
            // try again
            return xhr(url, params, retries - 1);
        }

        // there is a error unrelated to a request error
        return Promise.reject(error);
    }
};
/* eslint-disable no-undef */

export { RequestError, xhr };
