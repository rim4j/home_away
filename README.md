### Next App

```sh

npx create-next-app@14 home-away
```

```sh
npm run dev
```

### Remove Boilerplate

- in globals.css remove all code after directives
- page.tsx

```tsx
function HomePage() {
  return <h1 className='text-3xl'>HomePage</h1>;
}
export default HomePage;
```

- layout.tsx

```tsx
export const metadata: Metadata = {
  title: "HomeAway",
  description: "Feel at home, away from home.",
};
```

- get a hold of the README.MD

### Create Pages

/app

- bookings
- checkout
- favorites
- profile
- properties
- rentals
- reviews

- new file - pageName/page.tsx

```tsx
function BookingsPage() {
  return <h1 className='text-3xl'>BookingsPage</h1>;
}
export default BookingsPage;
```

### Shadcn/ui

[Docs](https://ui.shadcn.com/)

[Next Install](https://ui.shadcn.com/docs/installation/next)

```sh
npx shadcn@latest init

```

- New York
- Zinc

```sh
npx shadcn@latest add button
```

```tsx
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div>
      <h1 className='text-3xl'>HomePage</h1>
      <Button variant='outline' size='lg' className='capitalize m-8'>
        Click me
      </Button>
    </div>
  );
}
export default HomePage;
```

```sh
npx shadcn@latest add breadcrumb calendar card checkbox dropdown-menu input label popover scroll-area select separator table textarea skeleton
```

- components
  - ui
  - card
  - form
  - home
  - navbar
  - properties

### Navbar - Setup

- create

- navbar
  - DarkMode.tsx
  - LinksDropdown.tsx
  - Logo.tsx
  - Navbar.tsx
  - NavSearch.tsx
  - SignOutLink.tsx
  - UserIcon.tsx

### Tailwind Custom Class

globals.css

```css
@layer components {
  .container {
    @apply mx-auto max-w-6xl xl:max-w-7xl px-8;
  }
}
```

### Navbar - Structure

```tsx
import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center '>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
```

```tsx
import Navbar from "@/components/navbar/Navbar";

return (
  <html lang='en' suppressHydrationWarning>
    <body className={inter.className}>
      <Navbar />
      <main className='container py-10'>{children}</main>
    </body>
  </html>
);
```

### Logo

```sh
npm install react-icons

```

if you got some issue with npm or yarn you can use [bun](https://bun.sh/docs/installation) for installation

[React Icons](https://react-icons.github.io/react-icons/)

```tsx
import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <LuTent className='w-6 h-6' />
      </Link>
    </Button>
  );
}
```

### NavSearch

```tsx
import { Input } from "../ui/input";

function NavSearch() {
  return (
    <Input
      type='search'
      placeholder='find a property...'
      className='max-w-xs dark:bg-muted '
    />
  );
}
export default NavSearch;
```

### DarkMode

[shadcn theme](https://ui.shadcn.com/themes)

[Next.js Dark Mode](https://ui.shadcn.com/docs/dark-mode/next)

```sh
npm install next-themes
```

- create app/theme-provider.tsx

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

providers.tsx

```tsx
"use client";
import { ThemeProvider } from "./theme-provider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
export default Providers;
```

then wrap Providers in the app>layout.tsx

```tsx
import Providers from "./providers";

<Providers>
  <Navbar />
  <main className='container py-10'>{children}</main>
</Providers>;
```

### DarkMode

- make sure you export as default !!!

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
