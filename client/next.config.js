const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: "frame-ancestors 'self' http://*:5501",
    },
];

module.exports = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};
