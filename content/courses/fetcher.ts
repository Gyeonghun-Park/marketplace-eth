import { Course } from '@content/types/course';
import courses from './index.json';

interface CourseData {
  [key: string]: Course;
}

export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce<CourseData>(
      (acc: CourseData, cur: Course, i: number) => {
        acc[cur.id] = cur;
        acc[cur.id].index = i;
        return acc;
      },
      {},
    ),
  };
};
