module.exports = {
    redirects: async () => {
        return [
            {
                source: '/api/hello',
                destination: '/',
                permanent: true,
            },
        ];
    },
};
