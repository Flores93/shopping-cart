export const getStaticProps = async () => {
  const res = await fetch(`https://products-api-meru.vercel.app/api/products`)
  const data = await res.json()

  return {
    props: {
      productos: data,
    },
  }
}
