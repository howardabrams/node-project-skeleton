/**
 * Redirects to the `index.html` page.
 *
 * This function simply returns a `302` HTTP status and redirects
 * to the `public/index.html` file.
 */

exports.index = function( request, response ) {
    response.statusCode = 302;
    response.setHeader("Location", "/index.html");
    response.end('<p>302. Redirecting to index.html</p>');
};
