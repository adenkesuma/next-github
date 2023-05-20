import { FC } from "react";
import Link from 'next/link';
interface CoursesProps {}

type CourseType = {
    id: number;
    title: string;
    level: string;
    description: string;
    link: string;
}

const Courses: FC<CourseType> = ({ courses }) => {

    return ( 
        <div>
            {courses.map((course : CourseType) => {
                return (
                    <div key={course.id}>
                        <h2>{course.title}</h2>
                        <span>{course.level}</span>
                        <p>{course.description}</p>
                        <Link href={course.link}>
                            Go to course
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Courses;