import * as React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({ className, isActive, ...props }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "flex size-10 items-center justify-center rounded-md text-[17px] font-normal text-[#464C53] transition-colors hover:bg-accent",
        isActive && "bg-[#063A74] text-white font-bold hover:bg-[#063A74]/90",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <button
      aria-label="Go to previous page"
      data-slot="pagination-previous"
      className={cn(
        "flex h-10 items-center gap-1 rounded-md px-2 pl-1 pr-2 text-[17px] font-normal text-[#8A949E] transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <ArrowLeftIcon className="size-5" />
      <span>이전</span>
    </button>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <button
      aria-label="Go to next page"
      data-slot="pagination-next"
      className={cn(
        "flex h-10 items-center gap-1 rounded-md px-2 pl-2 pr-1 text-[17px] font-normal text-[#464C53] transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span>다음</span>
      <ArrowRightIcon className="size-5" />
    </button>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-10 items-center justify-center text-[#33363D]",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-5" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
import * as React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({ className, isActive, ...props }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "flex size-10 items-center justify-center rounded-md text-[17px] font-normal text-[#464C53] transition-colors hover:bg-accent",
        isActive && "bg-[#063A74] text-white font-bold hover:bg-[#063A74]/90",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <button
      aria-label="Go to previous page"
      data-slot="pagination-previous"
      className={cn(
        "flex h-10 items-center gap-1 rounded-md px-2 pl-1 pr-2 text-[17px] font-normal text-[#8A949E] transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <ArrowLeftIcon className="size-5" />
      <span>이전</span>
    </button>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <button
      aria-label="Go to next page"
      data-slot="pagination-next"
      className={cn(
        "flex h-10 items-center gap-1 rounded-md px-2 pl-2 pr-1 text-[17px] font-normal text-[#464C53] transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span>다음</span>
      <ArrowRightIcon className="size-5" />
    </button>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-10 items-center justify-center text-[#33363D]",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-5" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
import * as React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({ className, isActive, ...props }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "flex size-10 items-center justify-center rounded-md text-[17px] font-normal text-[#464C53] transition-colors hover:bg-accent",
        isActive && "bg-[#063A74] text-white font-bold hover:bg-[#063A74]/90",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <button
      aria-label="Go to previous page"
      data-slot="pagination-previous"
      className={cn(
        "flex h-10 items-center gap-1 rounded-md px-2 pl-1 pr-2 text-[17px] font-normal text-[#8A949E] transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <ArrowLeftIcon className="size-5" />
      <span>이전</span>
    </button>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <button
      aria-label="Go to next page"
      data-slot="pagination-next"
      className={cn(
        "flex h-10 items-center gap-1 rounded-md px-2 pl-2 pr-1 text-[17px] font-normal text-[#464C53] transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span>다음</span>
      <ArrowRightIcon className="size-5" />
    </button>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-10 items-center justify-center text-[#33363D]",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-5" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
