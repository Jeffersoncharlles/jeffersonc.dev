# jeffersonc.dev

Welcome to the source code of my personal portfolio and blog. This project is designed to be a unique, interactive experience that goes beyond a traditional static website.

## 🌟 The Proposal

The core idea of this portfolio is to provide an immersive, developer-centric environment:

- **VS Code Theme:** The main interface mimics the look and feel of a modern code editor (inspired by VS Code and the Dracula/Tokio Night themes), complete with a functional file explorer sidebar.
- **Responsive Device Mockups:** Instead of simply stacking elements on smaller screens, the UI intelligently embeds itself into realistic device mockups. On desktop/tablet, you'll see the interface within an iPad frame. On mobile, it seamlessly adapts into an iPhone frame.
- **Distinct Blog Experience:** Navigating to the blog transitions you out of the code editor and into a clean, minimalist editorial layout. Smooth page transitions connect these two distinct visual worlds.

## 🛠️ Technologies Used

This project is built with modern, cutting-edge web technologies:

- **[Next.js 16 (App Router)](https://nextjs.org/)** - For optimal performance, routing, and Server Components.
- **[React 19](https://react.dev/)** - The latest version of React for building the user interface.
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed JavaScript for safer and more maintainable code.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)** - Utility-first CSS framework for rapid, custom UI development without leaving the HTML.
- **[Framer Motion](https://www.framer.com/motion/)** - Used for orchestrating smooth, fluid page transitions between the portfolio and blog routes.
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon set.
- **[Biome](https://biomejs.dev/)** - Extremely fast formatter and linter.
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager.

## 🚀 Getting Started

First, install the dependencies using pnpm:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app/(vscode)`: Contains the main portfolio layout, mimicking a code editor and handling the responsive device mockups (iPad/iPhone).
- `src/app/blog`: The editorial-style blog section with its own distinct layout.
- `src/components`: Reusable UI components, including the Sidebar (`Aside`), Header, and device mockups.
- `src/app/globals.css`: Global styles, Tailwind configuration, and CSS variables defining the theme and colors.

## 📄 License

This project is open-source and available under the MIT License.
