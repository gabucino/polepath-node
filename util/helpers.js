//Create Historyitem
const History = require('../models/history')
const ObjectId = require('mongodb').ObjectID


exports.createHistory = async (type, userId, polemoveId, itemRef) => {
    const historyItem = new History({
        type: type,
        userRef: userId,
        polemoveRef: polemoveId,
        itemRef: itemRef ? itemRef : null
      })
  
      await historyItem.save()
}
