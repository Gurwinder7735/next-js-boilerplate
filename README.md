This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
i
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Component Creation

To create components and icons using the provided scripts, follow these instructions:

Creating a Component
To create a component with or without a container, use the provided bash script. The script allows you to specify whether you want to create just the component file or both the component and container files.

## Usage:

> **Note:** Note: When running the scripts for the first time, make sure to set the executable permissions with the following commands:

```bash
chmod +x scripts/create-component.sh
chmod +x scripts/create-icon.sh
```

```bash
npm run create-component <mode> <component-name> [path]
```

### <mode>:

c - Create only the component file.
cc - Create both the component and container files.
<component-name>: The name of the component in kebab-case (e.g., my-component).

### <component-name>:

<component-name>: The name of the component in kebab-case (e.g., my-component).

### [path] (optional):

##### The path where the component files should be created. Defaults to the current directory.

Examples:

Create only a component file:

```bash
npm run create-component c my-component src/components/atoms
```

This will create

- A component file named `my-component.component.tsx`
- An `index.tsx` file that exports the component from the container
- A `types.ts` file with interfaces for both the component and container
- An empty `style.css` file

Create both component and container files:

```bash
npm run create-component cc my-component
```

This will create:

- A component file: `my-component.component.tsx`
- A container file: `my-component.container.tsx`
- An `index.tsx` file that exports the component from the container
- A `types.ts` file with interfaces for both the component and container
- An empty `style.css` file

Usage:

bash
Copy code
./create-icon.sh <icon-name> [path]
<icon-name>: The name of the icon in kebab-case (e.g., my-icon).

[path] (optional): The path where the icon files should be created. Defaults to the current directory.

Examples:

## Create an icon file:

```bash
Copy code
npm run create-icon.sh my-icon
```

This will create:

An SVG component folder: my-icon
An index.tsx file that exports the icon component
For more details on the bash scripts and their usage, please refer to the script files directly.
