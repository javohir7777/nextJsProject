"use client";
import React, { useEffect, useState } from "react";
import {
  UserAddOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CommentOutlined,
  TeamOutlined,
  IdcardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import childrenType from "@/types/childrenType";

const { Header, Sider, Content } = Layout;

import "./AdminLayout.scss";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import ROLES from "@/types/roles";
const AdminHeader = ({ children }: childrenType) => {
  const location = usePathname();
  console.log(location);
  const [collapsed, setCollapsed] = useState(false);

  const { isAuthenticated, role } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated || ROLES.ADMIN !== role) {
      redirect("/login");
    }
  }, [isAuthenticated, role]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="admin-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo">Admin</div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location]}
          items={[
            {
              key: "/admin",
              icon: <UserAddOutlined style={{ fontSize: "20px" }} />,
              label: (
                <Link className="text-decoration-none" href="/admin">
                  Admin
                </Link>
              ),
            },
            {
              key: "/admin/users",
              icon: <TeamOutlined style={{ fontSize: "20px" }} />,
              label: (
                <Link className="text-decoration-none" href="/admin/users">
                  Users
                </Link>
              ),
            },
            {
              key: "/admin/category",
              icon: <CommentOutlined style={{ fontSize: "20px" }} />,
              label: (
                <Link className="text-decoration-none" href="/admin/category">
                  Category
                </Link>
              ),
            },
            {
              key: "/admin/account",
              icon: <IdcardOutlined style={{ fontSize: "20px" }} />,
              label: (
                <Link className="text-decoration-none" href="/admin/account">
                  Account
                </Link>
              ),
            },
            {
              key: "/admin/logout",
              icon: <LogoutOutlined style={{ fontSize: "20px" }} />,
              label: (
                <Link className="text-decoration-none" href="/admin/logout">
                  Logout
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            color: "black",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminHeader;
