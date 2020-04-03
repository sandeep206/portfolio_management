import { Employee } from './employee.model'

export const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create({ ...req.body })
      .lean()
      .exec()
    res.status(201).json({ data: employee })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const updateEmployee = async (req, res) => {
  try {
    const updateEmployee = await Employee.findByIdAndUpdate(
      req.employee._id,
      req.body,
      {
        new: true
      }
    )
      .lean()
      .exec()

    res.status(200).json({ data: updateEmployee })
  } catch (e) {
    console.log(e)
    res.status(400).end()
  }
}

export const getEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.find()
      .lean()
      .exec()

    res.status(200).json({ data: allEmployees })
  } catch (e) {
    console.log(e)
    res.status(400).end()
  }
}
