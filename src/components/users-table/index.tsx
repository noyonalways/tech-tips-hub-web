"use client"

import { IUser } from "@/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Link from "next/link";

interface IProps {
  users: IUser[]
}

const UsersTable = ({users}: IProps) => {
  return (
    <Table radius="sm">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>
              <Link href={`/users/@${user.username}`} className="inline-flex space-x-2">
                <Avatar src={user.profilePicture} size="sm" />
                <div>
                  <h3 className="font-medium">{user.fullName}</h3>
                  <span className="text-xs">{user.email}</span>
                </div>
              </Link>
            </TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell className="flex items-center space-x-2">
              <Button size="sm" radius="sm" variant="flat" color="danger">
                Block
              </Button>
              <Button size="sm" radius="sm" variant="flat">
                Make Admin
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
