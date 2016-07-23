'use strict'

module.exports = function(bookshelf) {

  const Email = bookshelf.Model.extend({
    tableName: 'kaine_email'
  })

  return bookshelf.model('Email', Email)

}
