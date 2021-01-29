import { Jobad } from "./jobad";

export class User {
    first_name!: String;
    last_name!: String;
    email!: String;
    createdAt!: Date;
    updatedAt!: Date;
    user_name!: String;
    image_url!: String;
    jobads!: Jobad[];
    job!: String;
    location!: String;
    website!: String;
    comments!: {
        content: String;
        comment_owner: String;
    }[];
}
 