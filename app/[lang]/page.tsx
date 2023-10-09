import Link from 'next/link';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { UserAuthForm } from '@/components/user-auth-form';
import { TLang } from '@/types';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

type TAuthenticationPage = {
  params: { lang: TLang };
};

const AuthenticationPage = ({ params: { lang } }: TAuthenticationPage) => {
  const t = useTranslations();
  metadata.title = t('metadata.title');
  metadata.description = t('metadata.description');

  return (
    <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <LocaleSwitcher lang={lang} />
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {t('authPage.createAccount')}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t('authPage.enterYourEmail')}
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            {t('authPage.byClickingContinue')}{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              {t('authPage.termsOfService')}
            </Link>{' '}
            {t('authPage.and')}{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              {t('authPage.privacyPolicy')}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
