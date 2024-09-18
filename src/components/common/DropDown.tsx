"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

type DropdownItemType = {
  key: string;
  label: string;
};

type DropDownProps = {
  DropDownLabel: string;
};

export default function DropDown({ DropDownLabel }: DropDownProps) {
  // Example dynamic data
  const [items, setItems] = useState<DropdownItemType[]>([
    { key: "new", label: "New file" },
    { key: "copy", label: "Copy link" },
    { key: "edit", label: "Edit file" },
    { key: "delete", label: "Delete file" },
  ]);

  return (
    <div className="h-[24px]">
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="text-drop-Down-text-color h-[24px] text-[14px] font-medium leading-[24px]"
          >
            {DropDownLabel}
            <span className="dropdown-arrow ml-2">&#9662;</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          onAction={(key) => alert(key)}
        >
          {items.map((item) => (
            <DropdownItem key={item.key} className="text-black flex flex-col">
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
