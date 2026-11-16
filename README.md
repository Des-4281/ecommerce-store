# E-Commerce Store

An online store built with React, TypeScript, Redux Toolkit, React Query, and Firebase Authentication. Products come from the [FakeStoreAPI](https://fakestoreapi.com/). Users can filter by category, add items to a cart, check out, and create an account or log in.

## Features

- **Product catalog.** Each product shows its image, title, price, category, description, rating, and an Add to Cart button.
- **Category filter.** The dropdown is built from the API's category list.
- **Image fallback.** If a product image fails to load, a "No image" placeholder is shown.
- **Shopping cart.** Change item counts with − and +, remove items, and see the total item count and price. The navbar badge shows the item count on every page.
- **Cart saved in sessionStorage.** The cart survives page refreshes until the tab is closed.
- **Checkout.** Clears the cart and shows a confirmation message.
- **User accounts.** Register, log in, and log out with Firebase Authentication. The navbar shows the logged-in user's email and a Logout button.

## Tech stack

- React 19 + TypeScript
- Vite
- Redux Toolkit + React Redux (cart)
- TanStack React Query (products and categories)
- Firebase Authentication
- React Router
- React-Bootstrap

## Getting started

1. Clone and install:

   ```bash
   git clone https://github.com/Des-4281/ecommerce-store.git
   cd ecommerce-store
   npm install
   ```

2. Set up Firebase:
   - Create a project in the [Firebase Console](https://console.firebase.google.com/).
   - Under **Authentication > Sign-in method**, turn on **Email/Password**.
   - Under **Project settings > General**, add a **Web app** and copy its config values.

3. Copy `.env.example` to `.env.local` and fill in the values:

   ```bash
   cp .env.example .env.local
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

   Then open http://localhost:5173.

`.env.local` is listed in `.gitignore`, so your Firebase keys are not committed.

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Type-checks and builds the app into `dist/` |
| `npm run preview` | Serves the built app locally |
| `npm run lint` | Runs ESLint |

## Pages

| Page | URL | What it does |
|---|---|---|
| Home | `/` | Product list, category filter, Add to Cart |
| Cart | `/cart` | Cart contents, totals, Checkout |
| Login | `/login` | Log in with email and password |
| Register | `/register` | Create an account |
| Not found | any other URL | "Page not found" message |

## Project structure

```
src/
  main.tsx                     Wraps the app in Router, Redux, React Query, and Auth providers
  App.tsx                      NavBar and routes
  firebaseConfig.ts            Firebase setup (reads keys from .env.local)
  authErrors.ts                Turns Firebase error codes into readable messages
  types.ts                     Product and CartItem types
  api/fakeStore.ts             FakeStoreAPI fetch functions
  hooks/useStoreQueries.ts     React Query hooks for products and categories
  context/authContext.ts       Auth context and the useAuth hook
  context/AuthProvider.tsx     Tracks the logged-in user with onAuthStateChanged
  redux/cartSlice.ts           Cart state, actions, selectors, and sessionStorage helpers
  redux/store.ts               Redux store; saves the cart after every change
  components/NavBar.tsx        Navigation, cart badge, and login/logout links
  components/ProductCard.tsx   One product with its Add to Cart button
  components/ProductImage.tsx  Image with a placeholder fallback
  pages/                       Home, Cart, Login, Register, and Not Found pages
```

## How it works

- **React Query** handles server data (products and categories): fetching, caching, and loading and error states.
- **Redux Toolkit** handles the cart. Totals are calculated by selectors, and `store.subscribe` saves the cart to sessionStorage after every change.
- **Firebase Auth** handles accounts. `AuthProvider` listens with `onAuthStateChanged` and shares `user` and `loading` through React Context. Components read them with `useAuth()`.

## License

MIT
