import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// This gets called on every request
export async function getServerSideProps(context) {

  context.res.setHeader('x-super-header', 'application/json')
  // Pass data to the page via props
  return { props: {  } }
}

export default MyApp
