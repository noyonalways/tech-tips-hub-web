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

export type TUserRole = "User" | "Admin";
export type TUserStatus = "Active" | "Blocked";
export type TUserGender = "Male" | "Female" | "Other";

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
  gender: TUserGender;
  role: TUserRole;
  status: TUserStatus;
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
