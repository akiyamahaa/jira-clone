This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Configuration
1. Setup database
  - Create database
  - add database ID to env
  - create collection named 'workspaces'
  - add workspaces ID to env
  - Create attributes
    - string - name - 256 - required
    - string- userId - 50 - string required
2. Setup Permissions
  - go to workspaces settings
  - add Users and tick all method 
3. Setup Storage
  - go to storage
  - Create Bucket with name `images`
  - Add ID to env
  - go to images setting
    - maximum file size 1 Megabytes
    - allowed file: jpg png svg jpeg
    - permisions -> USERS (ALL)
    - 
4. Setup workspace attribute
  - Create attribute 
    -  string - imageUrl - 14000000 - not required