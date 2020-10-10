const Faq = require('../models/faq')

exports.getFaq = async (req, res, next) => {
  const freData = await Faq.find({ faqType: req.params.faqType })

  res.status(201).json({
    freData: freData,
  })
}

exports.addFaq = async (req, res, next) => {
  try {
    console.log(req.user.role)
    if (req.user.role !== 'admin') {
      const error = new Error("You don't have the permission to do that")
      error.statusCode = 401
      throw error
    }

    const newFaq = new Faq({
      question: req.body.question,
      answer: req.body.answer,
      faqType: req.body.faqType,
    })

    await newFaq.save()

    res.status(201).json({
      message: 'Faq saved',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
