import { Hero } from '@components/common';
import { CourseList } from '@components/course';
import { BaseLayout } from '@components/layout';
import { getAllCourses } from '@content/courses/fetcher';
import { Course } from '@content/types/course';

interface Props {
  courses: Course[];
}

function Home({ courses }: Props) {
  return (
    <>
      <Hero />
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

export default Home;
