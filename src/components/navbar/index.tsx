"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Label } from "@radix-ui/react-label"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Frontend",
    href: "/docs/primitives/alert-dialog",
    description:
      "React, Next, Angular, Vue, Svelte, o que você preferir usar.",
  },
  {
    title: "Backend",
    href: "/docs/primitives/hover-card",
    description:
      "Java, C#, Nest, Node, Python, entre diversas outras linguagens.",
  },
  {
    title: "Fullstack",
    href: "/docs/primitives/progress",
    description:
      "Tudo em um pacote só ? Não tem problema, você também é bem vindo.",
  },
  {
    title: "UX/UI Designer",
    href: "/docs/primitives/scroll-area",
    description: "Crie a experiência ideal para o usuário utilizando suas ferramentas.",
  },

]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="p-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Label className="font-semibold mr-4">
            DevCollab
          </Label>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Como Funciona</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      DevCollab
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Colabore com desenvolvedores de todo o mundo em projetos reais.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introdução">
                Como funciona a plataforma.
              </ListItem>
              <ListItem href="/docs/installation" title="Projetos">
                Quais tipos de projetos irei trabalhar.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Planos">
                Planos e Preços.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Stacks</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/signin" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Acessar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
