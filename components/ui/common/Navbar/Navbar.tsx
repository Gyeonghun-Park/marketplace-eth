import Link from 'next/link';
import { useWeb3 } from '@components/providers';
import { Button } from '@components/ui/common';
import { useAccount } from '@components/hooks/web3';
import { useRouter } from 'next/router';

function Navbar() {
  const { connect, isLoading, web3 } = useWeb3();
  const { account } = useAccount();
  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/marketplace">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>
              {isLoading ? (
                <Button disabled onClick={connect}>
                  Loading...
                </Button>
              ) : web3 != null ? (
                account.data ? (
                  <Button hoverable={false} className="cursor-default">
                    Hi there {account.isAdmin && 'Admin'}
                  </Button>
                ) : (
                  <Button onClick={connect}>Connect</Button>
                )
              ) : (
                <Button
                  onClick={() =>
                    window.open('https://metamask.io/download.html', '_blank')
                  }
                >
                  Install Metamask
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
      {account.data && !pathname.includes('/marketplace') && (
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="p-2 text-white bg-indigo-600 rounded-md">
            {account.data}
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
