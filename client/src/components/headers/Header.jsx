import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import navigations from "./navigations";
import { cn } from "@/lib/utils";
import { naviItemCn } from "@/lib/classnames";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Login } from "../logins";

const Header = () => {
  return (
    <div className="h-24 p-4 flex items-center shadow justify-between">
      <div className="flex items-center gap-6">
        <Link
          className="text-5xl font-bold tracking-widest text-shadow text-blue-600"
          to="/"
        >
          BDS24/7
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navigations.map((el) => (
              <Fragment key={el.id}>
                {el.hadSub && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-bold">
                      {el.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 grid grid-cols-2 min-w-96">
                      {el.subs.map((sub) => (
                        <NavigationMenuLink
                          key={sub.pathname}
                          className={cn(naviItemCn)}
                        >
                          {sub.name}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
                {!el.hadSub && (
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-sm font-bold">
                      {el.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-transparent text-stone-900 hover:bg-transparent hover:underline">
              Đăng Nhập / Đăng Ký
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-[800px] p-0" isHideClose={true}>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <Login />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Button variant="outline">Đăng Tin</Button>
      </div>
    </div>
  );
};

export default Header;
