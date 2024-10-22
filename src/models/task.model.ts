import { Document } from 'mongoose';
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