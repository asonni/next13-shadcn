'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter, Rubik } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Locale } from '@/i18n.config';
import { buttonVariants } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['arabic'] });

type TLocaleSwitcher = {
  lang: Locale;
};

export const LocaleSwitcher = ({ lang }: TLocaleSwitcher) => {
  const pathName = usePathname();

  const redirectedPathName = () => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = lang === 'en' ? 'ar' : 'en';
    return segments.join('/');
  };

  return (
    <Link
      href={redirectedPathName()}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute top-4 md:top-8',
        lang === 'en' ? 'right-4 md:right-8' : 'left-4 md:left-8',
        lang === 'ar' ? inter.className : rubik.className
      )}
    >
      {lang === 'en' ? 'العربية' : 'English'}
    </Link>
  );
};
