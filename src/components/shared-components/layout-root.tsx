import BottomNavigations from '@/components/components-parts/bottom-navigations';
import HeaderNavigation from '@/components/components-parts/header-navigations';
import { cn } from '@/lib/utils';

interface LayoutRootProps {
  title?: string
  children: React.ReactNode;
  className?: string;
  bottomNavOnly?: boolean;
}

export default function LayoutRoot({
  children,
  className,
  bottomNavOnly = false,
  title,
}: LayoutRootProps) {
  return (
    <div className={cn(['max-w-screen-sm mx-auto bg-white py-16 overflow-hidden min-h-dvh', className])}>
      {!bottomNavOnly && <HeaderNavigation title={title} />}
      {children}
      {/* <div className="pt-16">{children}</div> */}
      <BottomNavigations />
    </div>
  );
}
