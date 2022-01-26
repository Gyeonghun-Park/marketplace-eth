import { CourseList } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { getAllCourses } from '@content/courses/fetcher';
import { WalletBar } from '@components/ui/web3';
import { useAccount } from '@components/hooks/web3/useAccount';
import { Course } from '@content/types/course';

interface Props {
  courses: Course[];
}

export function Marketplace({ courses }: Props) {
  const { account } = useAccount();

  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} />
      </div>
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

export default Marketplace;

Marketplace.Layout = BaseLayout;
