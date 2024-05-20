import Candidate from "./candidate"
import Comment from "./comment"
import User from "./user"

export default interface EntryInfo{
    index : number
    createdAt : number
    thumbnail : string
    title : string
    subTitle : string
    description : string
    tags : string[]
    likes : number
    disLikes : number
    playCount : number
    author : User
    comments : Comment[]
    candidates : Candidate[]
    nsfw : boolean
}