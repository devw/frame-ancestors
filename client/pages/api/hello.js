// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.setHeader(
        'Content-Security-Policy',
        `frame-ancestors https://admin.shopify.com http://localhost:5501/`
    );
    res.redirect(`/blog/blog-id-10`);
}
