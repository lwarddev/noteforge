import { Logout } from "@/components/logout";
import { Notebooks } from "@/components/Notebooks";
import PageWrapper from "@/components/page-wrapper";
import { Suspense } from "react";

export default function page() {
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Dashboard</h1>
      <Notebooks />
      <Logout />
    </PageWrapper>
  );
}
