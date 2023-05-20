import { NextResponse } from "next/server";
import courses from '../data.json';

export async function GET(req: NextResponse) {
    const { searchParams } = new URL(req.url);
    const query : string | null = searchParams.get('query');
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLocaleLowerCase());
    })

    return NextResponse.json(filteredCourses)
}