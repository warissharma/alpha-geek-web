"use client";

import { NavbarMenuToggle } from "@nextui-org/react";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";

export default function NavbarMenuToggleCustom() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <NavbarMenuToggle
      icon={
        <div>
          <motion.div
            className="bg-foreground"
            initial={{
              width: "1.3rem",
              height: "0.15rem",

              marginBottom: "0.25rem",
            }}
            animate={
              isSelected
                ? {
                    width: "1.3rem",
                    height: "0.15rem",

                    marginBottom: "0rem",
                    transform: "rotate(45deg)",
                  }
                : {
                    width: "1.3rem",
                    height: "0.15rem",

                    marginBottom: "0.25rem",
                  }
            }
          />
          <motion.div
            className="bg-foreground"
            initial={{
              width: "1.3rem",
              height: "0.15rem",

              marginBottom: "0.25rem",
            }}
            animate={
              isSelected
                ? {
                    display: "none",
                  }
                : {
                    width: "1.3rem",
                    height: "0.15rem",

                    marginBottom: "0.25rem",
                  }
            }
          />
          <motion.div
            className="bg-foreground"
            initial={{
              width: "1.3rem",
              height: "0.15rem",
            }}
            animate={
              isSelected
                ? {
                    width: "1.3rem",
                    height: "0.15rem",

                    marginTop: "-0.15rem",
                    transform: "rotate(-45deg)",
                  }
                : {
                    width: "1.3rem",
                    height: "0.15rem",
                  }
            }
          />
        </div>
      }
      //   isSelected={isSelected}
      onClick={() => {
        setIsSelected((value: SetStateAction<Boolean>) => !isSelected);
      }}
    />
  );
}
