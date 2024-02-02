"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { AppDispatch } from "@/src/redux/store";
import { useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "@/src/redux/theme/themeSlice";

export default function ThemeSelector() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="light">
          <span className="material-symbols-outlined">palette</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="dark"
          onClick={() => {
            dispatch(setDarkTheme());
          }}
        >
          dark
        </DropdownItem>
        <DropdownItem
          key="light"
          onClick={() => {
            dispatch(setLightTheme());
          }}
        >
          light
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
