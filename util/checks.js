exports.adminCheck = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res
      .status(401)
      .json({ message: "You don't have the permission to do that" })
  }
  next()
}

exports.checkForErrors = async (req, res, next) => {
  const email = req.body.email

  const user = await User.findOne({ email: email.toLowerCase() })

  if (!user) {
    return res
      .status(400)
      .json({ message: 'No account found with this e-mail address.' })
  }
  next()
}
