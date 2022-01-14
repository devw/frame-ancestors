export default function Home({ query }) {
    // render client-side
    return (
        <div>
            <div>Object.keys(query): {Object.keys(query)}</div>
            <div>Object.values(query): {Object.values(query)}</div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    console.log('query:', query); // render server-side
    context.res.setHeader('X-getServerSideProps-header', query.id);
    return { props: { query } };
}
