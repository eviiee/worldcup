import User from "./user";

export default interface Comment {
    key : number
    author : User
    createdAt : number
    content : string
    likes : number
    disLikes : number
}