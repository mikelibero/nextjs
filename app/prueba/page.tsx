const query = `{
  footer{
    data{
      attributes{
        logo{
          image{
            data{
              attributes{
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}`


const fetchPost = () => {
  return fetch('https://461b-93-176-180-203.eu.ngrok.io/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query
    }),
  })
    .then(res => res.json())
}

export default async function Prueba() {
  const footer = await fetchPost();
  return (
    <main >
      <div>
        Prueba 1, creo que ahora si
       {footer.data.footer.data.attributes.logo.image.data.attributes.url}
      </div>
    </main>
  )
}
