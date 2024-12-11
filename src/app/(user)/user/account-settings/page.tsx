import React from "react";
import AccountSettings from "../../../../components/account/AccountSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Account Settings page of Chez Tati",
};

const AccountSettingPage = () => {
  return <AccountSettings></AccountSettings>;
};

export default AccountSettingPage;
