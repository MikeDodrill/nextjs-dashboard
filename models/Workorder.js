import {Schema, model, models} from 'mongoose';

const WorkorderSchema = new Schema({

employee: {

    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},


contact: {
    type: String,
    required: true,
},

description: {
    type: String,
    required: true,
},

location: {
    street:{ type: String},
    city:{ type: String},
    state:{ type: String},
    zipcode:{ type: String},
}



},{
    timestamps: true
}
);

const Workorder = models.Workorder || model('Workorder', WorkorderSchema)

export default Workorder;
