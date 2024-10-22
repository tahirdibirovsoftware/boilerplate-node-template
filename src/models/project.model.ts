import mongoose, { Document, Schema } from 'mongoose';




export interface IProject extends Document {
    name: string;
    description: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId;
}

export const ProjectSchema: Schema<IProject> = new Schema<IProject>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });


export const Project = mongoose.model<IProject>('Project', ProjectSchema);