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
