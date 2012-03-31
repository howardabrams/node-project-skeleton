/**
 * Redirects to the index.html page to run the tests.
 *
 * This function simply returns a `302` HTTP status and redirects
 * to the `test-api/index.html` file to quickly start up the tests.
 */

module.exports.index = function( request, response ) {
    response.statusCode = 302;
    response.setHeader("Location", "/index.html");
    response.end('<p>302. Redirecting to index.html</p>');
};
