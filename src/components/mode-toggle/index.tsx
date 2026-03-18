'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import { cn } from '@/src/utils/shadcn';

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2">
        <div className="h-20 w-6 animate-pulse bg-gray-200" />
      </div>
    );
  }

  const currentThemeLabel = resolvedTheme === 'dark' ? 'DARK' : 'LIGHT';

  const themeOptions = [
    {
      name: 'Light',
      value: 'light',
      icon: Sun,
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: Moon,
    },
    {
      name: 'System',
      value: 'system',
      icon: Monitor,
    },
  ];

  return (
    <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2">
      {!isExpanded ? (
        // Vertical indicator when collapsed
        <button
          onClick={() => setIsExpanded(true)}
          className={cn(
            'flex items-center justify-center',
            'h-20 w-4',
            'bg-primary hover:bg-primary-light',
            'text-[0.6rem] font-medium tracking-wider text-white',
            'transition-all duration-200',
            'cursor-pointer',
            'focus:ring-primary focus:ring-2 focus:ring-offset-2 focus:outline-none',
            'writing-vertical-rl'
          )}
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {currentThemeLabel}
        </button>
      ) : (
        // Expanded toggle
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(false)}
            className={cn(
              'flex items-center justify-center',
              'h-12 w-12',
              'bg-primary hover:bg-primary-light',
              'text-white',
              'transition-all duration-200',
              'cursor-pointer',
              'focus:ring-primary focus:ring-2 focus:ring-offset-2 focus:outline-none'
            )}
            aria-label="Collapse theme toggle"
          >
            ×
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                aria-label="theme switcher"
                className="bg-primary hover:bg-primary-light flex h-12 w-12 cursor-pointer place-items-center items-center justify-center p-0 text-white"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="dark:border-accent-900 dark:bg-accent-700 bg-white"
            >
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.value;

                return (
                  <DropdownMenuItem
                    key={option.value}
                    className={cn(
                      isActive && 'bg-primary text-white',
                      'cursor-pointer'
                    )}
                    onClick={() => {
                      setTheme(option.value);
                      setIsExpanded(false);
                    }}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {option.name}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}
