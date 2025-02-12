/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { FaCopy, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { TProject } from "@/types/project";

export default function AllProjectsPage() {
  const [projects, setProjects] = React.useState<TProject[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  // Table states
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Fetch projects from API
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/projects`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const result = await response.json();
        const data = result?.data;
        setProjects(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  console.log(projects);

  const columns: ColumnDef<TProject>[] = [
    {
      accessorKey: "thumbnail",
      header: "Thumbnail Image",
      cell: ({ row }) => (
        <div className="w-[50px] h-[50px] overflow-hidden rounded-lg">
          <Image
            src={row.getValue("thumbnail")}
            width={50}
            height={50}
            alt="Thumbnail Image"
            className="object-cover"
          />
        </div>
      ),
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "technologiesUsed",
      header: "Technologies",
      cell: ({ row }) => {
        const techs = row.getValue("technologiesUsed") as string[];
        return <div className="text-sm">{techs?.join(", ")}</div>;
      },
    },
    {
      accessorKey: "liveLink",
      header: "Live Link",
      cell: ({ row }) => (
        <a
          href={row.getValue("liveLink")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit
        </a>
      ),
    },
    {
      accessorKey: "frontendSourceCode",
      header: "Frontend Repo Link",
      cell: ({ row }) => (
        <a
          href={row.getValue("frontendSourceCode")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit
        </a>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const project = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-transparent"
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(project.liveLink)}
              >
                <FaCopy className="mr-2 text-blue-500" />
                Copy Live Link
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <FaEye className="mr-2 text-green-600" /> View Details
              </DropdownMenuItem>

              <DropdownMenuItem>
                <FaEdit className="mr-2 text-amber-500" /> Edit
              </DropdownMenuItem>

              <DropdownMenuItem>
                <FaTrash className="mr-2 text-red-600" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: projects,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 1,
        pageIndex: 0,
      },
    },
  });

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter projects by title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm text-white border-[#27272A]"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto text-white hover:text-white border-[#27272A] bg-[#0A0A0A] hover:bg-[#27272A]"
            >
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-[#27272A]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-[#27272A] border-[#27272A]"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-[#989BA4]">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="hover:bg-[#27272A]"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-white">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-[#989BA4]"
                >
                  No projects data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-[#8750F7] text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-white hover:text-white bg-[#140C1C] hover:bg-[#27272A] border-[#27272A]"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-white bg-[#140C1C] hover:bg-[#27272A] hover:text-white border-[#27272A]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
