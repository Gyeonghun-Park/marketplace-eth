import { Course } from '@content/types/course';
import { ReactNode } from 'react';

interface Props {
  courses: Course[];
  children: (arg0: Course) => ReactNode;
}

function List({ courses, children }: Props) {
  return (
    <section className="grid gap-4 mb-5 md:grid-cols-1 lg:grid-cols-2">
      {courses.map((course) => children(course))}
    </section>
  );
}

export default List;
