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
                source: '/blog/:id',
                headers: [
                    {
                        key: 'X-nextConfig-header',
                        value: ':id',
                    },
                ],
            },
        ];
    },
};
