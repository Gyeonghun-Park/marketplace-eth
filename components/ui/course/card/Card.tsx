import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@content/types/course';

interface Props {
  course: Course;
}

export default function Card({ course }: Props) {
  return (
    <div className="overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
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
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {course.type}
          </div>
          <Link href={`/courses/${course.slug}`}>
            <a className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">
              {course.title}
            </a>
          </Link>
          <p className="mt-2 text-gray-500">{course.description}</p>
        </div>
      </div>
    </div>
  );
}
