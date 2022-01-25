import { Modal } from '@components/ui/common';
import { CourseHero, Curriculum, Keypoints } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { getAllCourses } from '@content/courses/fetcher';
import { Course } from '@content/types/course';

interface Props {
  course: Course;
}

interface Param {
  params: { slug: string };
}

function Course({ course }: Props) {
  return (
    <>
      <div className="py-4">
        <CourseHero
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
      </div>
      <Keypoints points={course.wsl} />
      <Curriculum locked />
      <Modal />
    </>
  );
}

export const getStaticPaths = () => {
  const { data } = getAllCourses();

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }: Param) => {
  const { data } = getAllCourses();
  const course = data.filter((c) => c.slug === params.slug)[0];

  return {
    props: {
      course,
    },
  };
};

export default Course;

Course.Layout = BaseLayout;
