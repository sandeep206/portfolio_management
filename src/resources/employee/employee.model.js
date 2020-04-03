import mongoose from 'mongoose'
const Schema = mongoose.Schema
const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'course'
      }
    ]
  },
  { timestamps: true }
)

export const User = mongoose.model('employee', employeeSchema)
