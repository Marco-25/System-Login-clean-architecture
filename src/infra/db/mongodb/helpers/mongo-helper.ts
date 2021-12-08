import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (connect: string): Promise<void> {
    this.uri = connect
    this.client = await MongoClient.connect(connect)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (this.client == null) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  mapAccountModel: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({},
      collectionWithoutId,
      {
        id: String(_id)
      })
  }
}
