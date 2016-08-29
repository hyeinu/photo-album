const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  pic_url: { type: String, required: true },
  time: { type: Date, default: Date.now }
})

// Image.pre('remove', function(next) {
//     // Remove all the assignment docs that reference the removed person.
//     this.model('Album').remove({ image: this._id }, next);
// });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
