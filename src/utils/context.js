import axios from 'axios'
let context = async () => {
  const res = await axios.get('/api/context.json')
  var GC = res.data
  return GC
}

export default context
