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
  onRowClick: (reserve: Reserve) => void;
};

export default function ReserveListTable({
  reserves,
  onRowClick,
}: ReserveListTableProps) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>予約者名</TableColumn>
        <TableColumn>ゴルフ場名</TableColumn>
        <TableColumn>予約人数</TableColumn>
        <TableColumn>メールアドレス</TableColumn>
        <TableColumn>ステータス</TableColumn>
      </TableHeader>
      <TableBody>
        {reserves.map((reserve) => (
          <TableRow key={reserve.id} onClick={() => onRowClick(reserve)}>
            <TableCell>{reserve.guestName}</TableCell>
            <TableCell>{reserve.golfCourseName}</TableCell>
            <TableCell>{reserve.personCount}</TableCell>
            <TableCell>{reserve.guestEmail}</TableCell>
            <TableCell>{reserve.status.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
