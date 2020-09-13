const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')


//Create Historyitem
const History = require('../models/history')
const ObjectId = require('mongodb').ObjectID

exports.createHistory = async (type, userId, polemoveId, itemRef) => {
  console.log('CREATING HISTORY ITEM')
    const historyItem = new History({
        type: type,
        userRef: userId,
        polemoveRef: polemoveId,
        itemRef: itemRef ? itemRef : null
      })
  
      await historyItem.save()
}

//Email transporter setup

exports.transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}))

