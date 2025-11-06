# slytube - Youtube Homepage clone with React + Vite + Tailwind

## Introduction

A version of Youtube Homepage clone using React, TypeScript, and Tailwind CSS. This React app showcases features such as responsive and collapsible sidebar; Video grid displaying thumbnails, titles, and the author channel info; hover-over to auto-play video;

<!-- **Link to project**: https://your-live-demo-url.example.com -->

![App Screenshot](https://github.com/slyncrafty/laughing-giggle/blob/main/img/demo-013534.png)

![App Demo](https://github.com/slyncrafty/laughing-giggle/blob/main/img/demo-013534.gif)

## Tech Stack

- **Frontend**: React, Vite, React Router
- **Styling**: Tailwind CSS
- **UI/UX**: Lucide React

## Features

- **Video Grid Layout**: Using responsive CSS grid, displays video thumbnails, titles, and the channel information from data.
- **PageHeader**: Navigation bar including logo, search form, and various icons.
- **Auto Play Videos**: Hover-over to Video thumbnail to start auto playing the video
- **Responsive Sidebar**: Responsive and collapsible side bar that open/close with menu button and respond to the screen size.

## Project Structure

**React App**

```
src/
  assets/       # Static images and icons
  components/   # UI components(Button, CategoryPills, VideoGridItem)
  contexts/     # SidebarContext
  data/         # home, sidebar
  layouts/      # PageHeader, Sidebar
  utils/        # fomatDuration, formatTimeAge
  App.tsx
  index.css
  main.tsx
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run

- **For running both React App and Server**

```bash

npm run dev

```

- Run the React app (Vite)
- Vite will print the dev URL. (`➜ Local: http://localhost:5173/`)
- Open the printed URL in your browser.

## Lessons Learned

- Feature-oriented folder structure scales better as the app grows
- Used Tailwind to keep consistent styles
- Small, reusable components simplify UI changes (Button, CategoryPills, and VideoGridItem)
- Utilizing React Context - context can provide a shared and centralized state that tracks(sidebar size/open and toggle/close)

## Optimizations

- Add a mock API for video data
- Theme toggle (light/dark)

## Examples

- **Portfolio:** https://slyncrafty.github.io/

## Reference

- [WebDevSimplified](https://github.com/WebDevSimplified/youtube-react-ts-tailwind-home-page)
