const Faq = require('../models/faq')

exports.getFaq = async (req, res, next) => {
  const freData = await Faq.find({ faqType: req.params.faqType })

console.log('getting faq')
  res.status(201).json({
    freData: freData,
  })
}


exports.addFaq = async (req, res) => {
  const newFaq = new Faq({
    question: req.body.question,
    answer: req.body.answer,
    faqType: req.body.faqType,
  })
console.log('adding FAQ')
  await newFaq.save()

  res.status(201).json({
    message: 'Faq saved',
  })
}

