"use client";

import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useInfiniteScroll } from "@heroui/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";

import fetchReserves from "@/features/reserve/api/fetchReserves";
import { Reserve } from "@/features/reserve/types";
import dayjs from "@/lib/dayjs";

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
  onRowClick: (reserve: ReserveListItem) => void;
  className?: string;
};

export default function ReserveListTable({
  onRowClick,
  className,
}: ReserveListTableProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const list = useAsyncList({
    async load({ cursor = "1" }) {
      if (cursor) {
        setIsLoading(false);
      }

      const { data: response, meta } = await fetchReserves({
        queryParams: { page: cursor ? parseInt(cursor) : 1 },
      });

      setHasMore(meta.last_page !== meta.current_page);

      return {
        items: response,
        cursor: String(cursor ? parseInt(cursor) + 1 : 1),
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  return (
    <Table
      aria-label="Example static collection table"
      baseRef={scrollerRef}
      isHeaderSticky
      bottomContent={
        hasMore ? (
          <div className="flex w-full justify-center">
            <Spinner ref={loaderRef} />
          </div>
        ) : null
      }
      className={className}
    >
      <TableHeader>
        <TableColumn>予約者名</TableColumn>
        <TableColumn>予約日</TableColumn>
        <TableColumn>ゴルフ場名</TableColumn>
        <TableColumn>予約人数</TableColumn>
        <TableColumn>メールアドレス</TableColumn>
        <TableColumn>ステータス</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items as ReserveListItem[]}
        loadingContent={<Spinner />}
      >
        {(item: ReserveListItem) => {
          return (
            <TableRow
              key={item.id}
              onClick={() => onRowClick(item)}
              className="cursor-pointer rounded-md hover:bg-gray-100"
            >
              <TableCell className="rounded-s-lg">{item.guest_name}</TableCell>
              <TableCell>
                {dayjs(item.start_date).format("YYYY年MM月DD日")}
              </TableCell>
              <TableCell>{item.golf_course_name}</TableCell>
              <TableCell>{item.person_count}</TableCell>
              <TableCell>{item.guest_email}</TableCell>
              <TableCell className="rounded-e-lg">{item.status.name}</TableCell>
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
