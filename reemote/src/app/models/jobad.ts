export class Jobad {
    _id!: String
    title!: String
    category!: String
    author_user_name!: String
    content!: String
    image_url!: String
    price!: String
    comments!: {
        content: String
        comment_owner: String
    }[]
}
