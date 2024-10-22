import { Document, Schema } from 'mongoose';
import mongoose from 'mongoose';

export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';


export interface ITask extends Document {
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Date;
    assignedTo: mongoose.Types.ObjectId;
    project: mongoose.Types.ObjectId;
    tags: Array<string>
}

const TaskShcema: Schema<ITask> = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['todo', 'in_progress', 'done'], default: 'todo' },
    priority: { type: String, enum: ['low', 'medium', 'high'] },
    dueDate: { type: Date },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    tags: [{ type: String }]

}, { timestamps: true });


const Task = mongoose.model<ITask>('Task', TaskShcema);