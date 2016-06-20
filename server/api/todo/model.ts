import * as mongoose from 'mongoose';

export interface IListModel extends IList, mongoose.Document {}
let listSchema = new mongoose.Schema ({

  list: {type: String}

})
