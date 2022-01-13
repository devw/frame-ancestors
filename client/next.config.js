const { headers } = require('./security-headers.next.config');
const { redirects } = require('./redirects.next.config');

module.exports = {
    reactStrictMode: true,
    redirects,
    headers,
};
