import { ICategory } from "./category.type";
import { IUser } from "./user.type";

export interface IPost {
  _id: string;
  author: IUser;
  title: string;
  slug: string;
  contentType: string;
  content: string;
  coverImage: string;
  category: ICategory;
  images: any[];
  tags: string[];
  isPremium: boolean;
  upVotes: number;
  downVotes: number;
  totalComments: number;
  totalViews: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
