import Commerce from '@chec/commerce.js'

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true)


//for fetch data

// const [products, setProducts] = useState([])

// const fetchProducts = async () => {
//   const {data} = await commerce.products.list({limit: 3}) // default 20 max 200
//   setProducts(data)
// }

// useEffect(()=>{
//   fetchProducts()
// }, [])

// console.log(products);