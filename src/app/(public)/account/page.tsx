"use client";

import { useEffect } from "react";
import Account from "@/components/shares/Account";
import { useAppSelector } from "@/redux/hooks";
import ROLES from "@/types/roles";
import { redirect } from "next/navigation";

const AccountPage = () => {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated || ROLES.USER !== role) {
      redirect("/login");
    }
  }, [isAuthenticated, role]);
  return (
    <div>
      <Account />
    </div>
  );
};

export default AccountPage;
