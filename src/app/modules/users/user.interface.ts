import { Model, Types } from 'mongoose'

export type IUser = {
  id: string
  role: string
  password: string
  student?: Types.ObjectId | IStudent
  // faculty?: Types.ObjectId | IFaculty;
  //student?: Types.ObjectId | IAdmin;
}
export type UserModel = Model<IUser, Record<string, unknown>>
