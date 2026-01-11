import { ReactNode } from "react";

/**
 * Interface for the Layout props.
 * Using ReactNode is the standard for components that wrap other elements.
 */
interface LayoutProps {
  children: ReactNode;
}

/**
 * MainLayout: The primary architectural wrapper for the application.
 * It provides a consistent Sidebar + TopBar + Content Area structure.
 */
export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* SIDEBAR: Persistent navigation for desktop users */}
      <aside className="w-64 bg-slate-900 hidden md:block shadow-xl">
        <div className="p-6 text-white font-bold border-b border-slate-800 tracking-tight">
          N-iX PERFORMANCE LAB
        </div>

        <nav className="p-4">
          {/* Navigation links will be injected here during the live coding session */}
        </nav>
      </aside>

      {/* VIEWPORT: Header and Main Content container */}
      <div className="flex-1 flex flex-col">
        {/* HEADER: Top bar for status indicators and global actions */}
        <header className="h-14 bg-white border-b px-6 flex items-center justify-between shadow-sm">
          <h1 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Engineering Dashboard
          </h1>

          <div className="flex items-center gap-4">
            {/* Placeholder for connection status or user profile */}
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-gray-500 font-medium">
              System Ready
            </span>
          </div>
        </header>

        {/* MAIN: The scrollable area where routes are rendered */}
        <main className="p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
