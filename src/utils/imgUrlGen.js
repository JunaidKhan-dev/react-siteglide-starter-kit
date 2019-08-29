const imgUrl = (imgName) => {
  const logo = document.getElementById('logo')
  const logoUrl = logo.getAttribute('data-src')
  console.log(logoUrl)
  let logoGen = logoUrl.replace(`dont-delete.png`, imgName)
  logoGen = logoGen.split('?')[0]
  logoGen = `${logoGen}?updated=${Date.now()}`
  return logoGen
}

export default imgUrl
