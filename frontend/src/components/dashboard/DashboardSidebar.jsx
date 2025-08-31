import {
  Home,
  BookOpen,
  SquarePen,
  User,
  GalleryVerticalEnd,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Paths } from "@/router/Paths";
import { Link } from "react-router";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "../Logo";

const items = [
  {
    title: "Home",
    link: Paths.dashboard,
    icon: Home,
  },
  {
    title: "Write Blog",
    link: Paths.writeBlog,
    icon: SquarePen,
  },
  {
    title: "My Blog",
    link: Paths.myBlog,
    icon: BookOpen,
  },
  {
    title: "Profile",
    link: Paths.profile,
    icon: User,
  },
];

export const DashboardSidebar = () => {
  const { theme } = useTheme();
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to={Paths.dashboard}>
                <div className="w-20 h-[20.75px]">
                  <Logo
                    color={
                      theme === "dark" || theme === "system"
                        ? "#FFFFFF"
                        : "#000000"
                    }
                  />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.link}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};
