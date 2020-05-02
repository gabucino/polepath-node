const axios = require('axios')
const fs = require('fs')

exports.bunnyGet = (req, res, next) => {
  axios
    .get('https://storage.bunnycdn.com/polepath/', {
      headers: {
        'Content-Type': 'application/json',
        AccessKey: process.env.BUNNY_STORAGE_API_KEY,
      },
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

exports.upload =  data => {
  const pic = fs.readFileSync(`./images/${data.fileName}`, '')

  axios
    .put(
      `https://storage.bunnycdn.com/polepath/users/${data.userId}/progressphotos/${data.polemoveId}/${data.fileName}`,
      pic,
      {
        headers: {
          AccessKey: process.env.BUNNY_STORAGE_API_KEY,
          Checksum: '',
        },
      }
    )
    .then((response) => {
        if (response.status === 201) {
            console.log(response.data)
            fs.unlinkSync(`./images/${data.fileName}`);

        }
    })
    .catch((error) => {
      console.log(error)
    })
}
