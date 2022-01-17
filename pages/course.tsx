import { Modal } from '@components/common';
import { CourseHero, Curriculum, Keypoints } from '@components/course';
import { BaseLayout } from '@components/layout';

function Course() {
  return (
    <>
      <div className="py-4">
        <CourseHero />
      </div>
      <Keypoints />
      <Curriculum />
      <Modal />
    </>
  );
}

export default Course;

Course.Layout = BaseLayout;
