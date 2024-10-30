export interface IComment {
  _id: string;
  post: ICommentPost;
  user: ICommentUser;
  content: string;
  isDeleted: boolean;
  images: any[];
  upVotes: number;
  downVotes: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICommentPost {
  _id: string;
  title: string;
  slug: string;
}

export interface ICommentUser {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  profilePicture: string;
}
