import { ReactNode } from 'react';
import { Navbar, Footer } from '@components/common';

type Props = {
  children: ReactNode;
};

function BaseLayout({ children }: Props) {
  return (
    <>
      <div className="px-4 mx-auto max-w-7xl">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default BaseLayout;
