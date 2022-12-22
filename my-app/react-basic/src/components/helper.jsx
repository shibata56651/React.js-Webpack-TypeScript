export const addTax = (price) => {
  return Math.floor(price * 1.1)
}

export const getWild = () => {
  console.log('Get wild and touch')
}

//async await例
const getInformation = async () => {
  const url = 'https://~~~~'

  const getDate = await fetch(url)
  .then(res => {
    console.log('非同期処理成功')
    return res.json()
  }).catch(error => {
    console.log(error)
  })
}

// getInformation();
