export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    createdAt: Date;
    updatedAt: Date;
}
