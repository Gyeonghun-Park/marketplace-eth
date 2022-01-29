import { Hero } from '@components/ui/common';
import { CourseList, CourseCard } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { getAllCourses } from '@content/courses/fetcher';
import { Course } from '@content/types/course';

interface Props {
  courses: Course[];
}

function Home({ courses }: Props) {
  return (
    <>
      <Hero />
      <CourseList courses={courses}>
        {(course: Course) => <CourseCard key={course.id} course={course} />}
      </CourseList>
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

Home.Layout = BaseLayout;
