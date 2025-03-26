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

type ReserveListTableProps = {
  reserves: Reserve[];
};

export default function ReserveListTable({ reserves }: ReserveListTableProps) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>予約者名</TableColumn>
        <TableColumn>ゴルフ場名</TableColumn>
        <TableColumn>メールアドレス</TableColumn>
        <TableColumn>人数</TableColumn>
        <TableColumn>ステータス</TableColumn>
      </TableHeader>
      <TableBody>
        {reserves.map((reserve) => (
          <TableRow key={reserve.id}>
            <TableCell>{reserve.name}</TableCell>
            <TableCell>{reserve.golfCourseName}</TableCell>
            <TableCell>{reserve.email}</TableCell>
            <TableCell>{reserve.personCount}</TableCell>
            <TableCell>{reserve.status.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
