import { Navbar } from '@/components/Navbar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar activeSection="blog" /> {/* Không truyền hàm setActiveSection */}
      <main className="pt-16">{children}</main>
    </div>
  );
}