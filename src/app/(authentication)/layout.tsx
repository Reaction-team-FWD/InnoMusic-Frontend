import { AuthHeader } from "@/components/AuthHeader";
import styles from "./home.module.scss";
import React from "react";
import "../../app/globals.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <title>{"Inno Music"}</title>
      </head>
      <div className={styles.homePageBody}>
        <AuthHeader />
        {children}
      </div>
    </>
  );
}
