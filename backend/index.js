import express from "express";
const app = express();
const port = process.env.PORT || 3000;

const blogs = [
  {
    id: "1",
    title: "Introduction to React",
    description:
      "React is a JavaScript library for building user interfaces. Learn the basics of components, props, and state.",
    authorName: "Jane Doe",
    authorImageUrl: "https://picsum.photos/id/237/150/150",
    date: "2025-04-01",
    imageUrl: "https://picsum.photos/id/1018/400/300",
    tags: ["react", "javascript"],
    readTime: 4,
    content: [
      {
        type: "paragraph",
        title: "What is React?",
        paragraph:
          "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.",
      },
      {
        type: "paragraph",
        title: "Why Use React?",
        paragraph:
          "React allows developers to build large web applications that can change data, without reloading the page. Its main goal is to be fast, scalable, and simple.",
      },
      {
        type: "image",
        title: "Component Structure Example",
        imageUrl: "https://picsum.photos/id/1050/600/400",
        paragraph:
          "The image above shows how a component-based structure in React helps maintain clarity and reusability.",
      },
    ],
  },
  {
    id: "2",
    title: "State Management with Context API",
    description:
      "The Context API allows you to pass data through the component tree without manually passing props at every level.",
    authorName: "John Smith",
    authorImageUrl: "https://picsum.photos/id/1005/150/150",
    date: "2025-04-03",
    imageUrl: "https://picsum.photos/id/1015/400/300",
    tags: ["react", "context-api"],
    readTime: 3,
    content: [
      {
        type: "paragraph",
        title: "Understanding Context",
        paragraph:
          "The Context API is a React structure that enables you to share specific forms of data across all levels of the app.",
      },
      {
        type: "paragraph",
        title: "When to Use Context",
        paragraph:
          "Context is great when many components at different levels need access to the same data, such as user settings or theme preferences.",
      },
    ],
  },
  {
    id: "3",
    title: "Getting Started with Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that helps you rapidly build modern UIs without leaving your HTML.",
    authorName: "Alice Johnson",
    authorImageUrl: "https://picsum.photos/id/1012/150/150",
    date: "2025-04-05",
    imageUrl: "https://picsum.photos/id/1019/400/300",
    tags: ["tailwind", "css"],
    readTime: 5,
    content: [
      {
        type: "paragraph",
        title: "Why Tailwind CSS?",
        paragraph:
          "Tailwind lets you style your elements directly within your HTML with utility classes, speeding up development.",
      },
      {
        type: "image",
        title: "Tailwind Example",
        imageUrl: "https://picsum.photos/id/1070/600/400",
        paragraph:
          "Here’s an example UI built entirely with Tailwind classes demonstrating how compact and expressive it can be.",
      },
    ],
  },
  {
    id: "4",
    title: "Understanding TypeScript Basics",
    description:
      "TypeScript adds optional static typing to JavaScript, enabling safer and more maintainable codebases.",
    authorName: "Mike Brown",
    authorImageUrl: "https://picsum.photos/id/1027/150/150",
    date: "2025-04-06",
    imageUrl: "https://picsum.photos/id/1020/400/300",
    tags: ["typescript", "javascript"],
    readTime: 2,
    content: [
      {
        type: "paragraph",
        title: "What is TypeScript?",
        paragraph:
          "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      },
      {
        type: "paragraph",
        title: "Benefits of TypeScript",
        paragraph:
          "It helps catch errors early through a type system and makes JavaScript development more predictable.",
      },
    ],
  },
  {
    id: "5",
    title: "Building Reusable Components in React",
    description:
      "Learn how to create modular and reusable UI components using React and best practices for prop drilling.",
    authorName: "Sophia Lee",
    authorImageUrl: "https://picsum.photos/id/1062/150/150",
    date: "2025-04-08",
    imageUrl: "https://picsum.photos/id/1021/400/300",
    tags: ["react", "components"],
    readTime: 6,
    content: [
      {
        type: "paragraph",
        title: "What are Reusable Components?",
        paragraph:
          "Reusable components are self-contained, independent pieces of code that can be used across your application to maintain consistency and reduce duplication.",
      },
      {
        type: "paragraph",
        title: "Prop Drilling Best Practices",
        paragraph:
          "While props are a great way to pass data, excessive drilling can be problematic. Use composition, context, or custom hooks to manage data flow cleanly.",
      },
    ],
  },
  {
    id: "6",
    title: "Using ShadCN UI in Your Projects",
    description:
      "ShadCN UI provides beautiful, accessible components built on top of Radix UI and styled with Tailwind CSS.",
    authorName: "Ethan Cole",
    authorImageUrl: "https://picsum.photos/id/1008/150/150",
    date: "2025-04-10",
    imageUrl: "https://picsum.photos/id/1022/400/300",
    tags: ["shadcn-ui", "react"],
    readTime: 7,
    content: [
      {
        type: "paragraph",
        title: "What is ShadCN UI?",
        paragraph:
          "ShadCN UI is a modern component library built with accessibility and customization in mind, leveraging Radix UI primitives and styled using Tailwind CSS.",
      },
      {
        type: "image",
        title: "ShadCN Component Example",
        imageUrl: "https://picsum.photos/id/1068/600/400",
        paragraph:
          "The image above illustrates a card component from ShadCN, showing clean structure and responsiveness.",
      },
    ],
  },
  {
    id: "7",
    title: "What is Vite and Why You Should Use It",
    description:
      "Vite is a next-generation frontend tooling platform that offers lightning-fast development server startup times.",
    authorName: "Olivia Martin",
    authorImageUrl: "https://picsum.photos/id/1011/150/150",
    date: "2025-04-12",
    imageUrl: "https://picsum.photos/id/1023/400/300",
    tags: ["vite", "tooling"],
    readTime: 8,
    content: [
      {
        type: "paragraph",
        title: "Why Vite?",
        paragraph:
          "Vite is optimized for speed and modern development. It uses native ES modules and on-demand file serving, making development blazing fast.",
      },
      {
        type: "paragraph",
        title: "Vite vs. Webpack",
        paragraph:
          "Unlike Webpack, Vite compiles modules only when requested. This results in near-instant server start and updates during development.",
      },
    ],
  },
  {
    id: "8",
    title: "A Deep Dive into React Hooks",
    description:
      "React Hooks allow you to use state and lifecycle features in functional components without writing classes.",
    authorName: "Noah Kim",
    authorImageUrl: "https://picsum.photos/id/1025/150/150",
    date: "2025-04-14",
    imageUrl: "https://picsum.photos/id/1024/400/300",
    tags: ["react", "hooks"],
    readTime: 9,
    content: [
      {
        type: "paragraph",
        title: "Understanding useState and useEffect",
        paragraph:
          "useState lets you add state to functional components, while useEffect enables you to perform side effects like data fetching or subscriptions.",
      },
      {
        type: "paragraph",
        title: "Custom Hooks",
        paragraph:
          "You can extract and reuse stateful logic using custom hooks, making your code cleaner and more maintainable.",
      },
    ],
  },
  {
    id: "9",
    title: "Deploying a React App with Vercel",
    description:
      "Vercel makes it easy to deploy full-stack web apps with zero configuration and global edge network support.",
    authorName: "Emma Walker",
    authorImageUrl: "https://picsum.photos/id/1026/150/150",
    date: "2025-04-16",
    imageUrl: "https://picsum.photos/id/1025/400/300",
    tags: ["react", "vercel", "deployment"],
    readTime: 10,
    content: [
      {
        type: "paragraph",
        title: "Why Choose Vercel?",
        paragraph:
          "Vercel offers seamless integration with GitHub, automatic builds, preview deployments, and edge caching for blazing-fast performance.",
      },
      {
        type: "paragraph",
        title: "Deployment Steps",
        paragraph:
          "To deploy, connect your repo, set build commands and environment variables, and Vercel handles the rest with automatic CI/CD.",
      },
      {
        type: "image",
        title: "Vercel Dashboard Example",
        imageUrl: "https://picsum.photos/id/1090/600/400",
        paragraph:
          "The image above shows Vercel’s intuitive dashboard with build logs, previews, and deployment history.",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.get("/api/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find((blog) => blog.id === blogId);
  if (!blog) return res.status(404).json({ error: "Blog not found" });

  res.json(blog);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
