export type TLoggedInUser = {
  _id: string;
  email: string;
  name: string;
  username: string;
  profilePicture: string;
  isPremiumUser: boolean;
  role: string;
  iat: number;
  exp: number;
};

export interface IUser {
  _id: string;
  fullName: string;
  username: string;
  bio: string;
  designation: string;
  email: string;
  phone: string;
  location: string;
  profilePicture: string;
  gender: string;
  role: string;
  status: string;
  totalFollowers: number;
  totalFollowing: number;
  dateOfBirth: string;
  isVerified: boolean;
  isPremiumUser: boolean;
  isDeleted: boolean;
  socialLinks: any[];
  createdAt: string;
  updatedAt: string;
  totalPosts: number;
  __v: number;
}
