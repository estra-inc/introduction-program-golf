"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { Reserve } from "../types";

type ReserveListItem = Pick<
  Reserve,
  | "id"
  | "start_date"
  | "guest_name"
  | "guest_email"
  | "person_count"
  | "status"
  | "golf_course_name"
>;

type ReserveListTableProps = {
  reserves: ReserveListItem[];
  onRowClick: (reserve: ReserveListItem) => void;
};

export default function ReserveListTable({
  reserves,
  onRowClick,
}: ReserveListTableProps) {
  console.log(reserves);
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>予約者名</TableColumn>
        <TableColumn>予約日</TableColumn>
        <TableColumn>ゴルフ場名</TableColumn>
        <TableColumn>予約人数</TableColumn>
        <TableColumn>メールアドレス</TableColumn>
        <TableColumn>ステータス</TableColumn>
      </TableHeader>
      <TableBody>
        {reserves.map((reserve) => (
          <TableRow key={reserve.id} onClick={() => onRowClick(reserve)}>
            <TableCell>{reserve.guest_name}</TableCell>
            <TableCell>{reserve.start_date}</TableCell>
            <TableCell>{reserve.golf_course_name}</TableCell>
            <TableCell>{reserve.person_count}</TableCell>
            <TableCell>{reserve.guest_email}</TableCell>
            <TableCell>{reserve.status.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
