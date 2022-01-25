import { ReactNode } from 'react';
import { Navbar, Footer } from '@components/ui/common';
import { Web3Provider } from '@components/providers';

type Props = {
  children: ReactNode;
};

function BaseLayout({ children }: Props) {
  return (
    <Web3Provider>
      <div className="px-4 mx-auto max-w-7xl">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  );
}

export default BaseLayout;
