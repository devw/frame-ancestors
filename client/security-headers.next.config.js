const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: "frame-ancestors 'self' http://*:5501",
    },
];

module.exports = {
    headers: async () => {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};
