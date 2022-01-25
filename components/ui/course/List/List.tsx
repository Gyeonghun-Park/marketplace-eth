import Image from "next/image"
import Link from "next/link"
import { Course } from '@content/types/course';

interface Props {
  courses: Course[];
}

function List({ courses }: Props) {
  return (
    <section className="grid gap-4 mb-5 md:grid-cols-1 lg:grid-cols-2">
      { courses.map(course =>
        <div
          key={course.id}
          className="overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
          <div className="flex h-full">
            <div className="flex h-full">
              <Image
                className="object-cover"
                src={course.coverImage}
                layout="fixed"
                width="200"
                height="230"
                alt={course.title}
              />
            </div>
            <div className="p-8">
              <div
                className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                {course.type}
              </div>
              <Link href={`/courses/${course.slug}`}>
                <a
                  className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">
                  {course.title}
                </a>
              </Link>
              <p
                className="mt-2 text-gray-500">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default List;
