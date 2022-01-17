import { Navbar, Footer, Hero, Breadcrumbs } from '@components/common';
import { EthRates, WalletBar } from '@components/web3';
import { CourseList } from '@components/course';
import { OrderCard } from '@components/order';

function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="relative px-4 mx-auto max-w-7xl">
          <Navbar />
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <WalletBar />
            <EthRates />
            <OrderCard />
            <CourseList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
