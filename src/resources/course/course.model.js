import mongoose from 'mongoose'
const Schema = mongoose.Schema
const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'employee'
    }
  ]
})

export const Course = mongoose.model('course', courseSchema)
