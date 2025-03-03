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
