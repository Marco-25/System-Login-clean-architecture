import { IAccountModel } from '../models/account-model'

export interface IAddAccountModel {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (account: IAddAccountModel) => Promise<IAccountModel>
}
