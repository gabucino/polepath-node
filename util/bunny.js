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

exports.upload = async (data) => {
  try {
    const pic = fs.readFileSync(`./images/${data.fsFileName}`, '')

    // const pic = fs.readFileSync(data.file)

    const response = await axios.put(
      `https://storage.bunnycdn.com/polepath/${data.path}/${data.bunnyFileName}`,
      pic,
      {
        headers: {
          AccessKey: process.env.BUNNY_STORAGE_API_KEY,
          Checksum: '',
        },
      }
    )

    if (response.status === 201) {
      console.log(response.data)
    } else {
      const error = new Error('Bunny upload failed :(')
      error.statusCode = 401
      throw error
    }
  } catch (error) {
    console.log(error)
  }
}

exports.getAll = async (data) => {
  try {
    const response = await axios.get(
      `https://storage.bunnycdn.com/polepath/${data.path}/`,
      {
        headers: {
          AccessKey: process.env.BUNNY_STORAGE_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (err) {
    console.error(err)
  }
}

exports.delete = async ({ polemoveId, userId, filename }) => {
  try {
    const response = await axios.delete(
      `https://storage.bunnycdn.com/polepath/users/${userId}/${polemoveId}/${filename}`,
      {
        headers: {
          AccessKey: process.env.BUNNY_STORAGE_API_KEY,
        },
      }
    )
  } catch (err) {
    console.error(err)
  }
}
