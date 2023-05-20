import { FC, Suspense } from "react";
import Repo from "@/components/repo";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import RepoDirs from "@/components/repo-dirs";

interface ReposIdProps {
    params: {
        reposId: string;
    }
}

const ReposId: FC<ReposIdProps> = ({ params }) => {
    return (
        <div className="w-full">
            <Link href="/code/repos" className="container mx-auto flex items-center gap-2 my-6">
                <FaChevronLeft /> <span className="font-semibold">Go back to repositories</span>
            </Link>
            <div className="container mx-auto bg-slate-900 text-white rounded-lg px-6 py-4">
                <Repo params={params} />
                <Suspense fallback={<div>Loading directories...</div>}>
                    <RepoDirs params={params} />
                </Suspense>
            </div>
            
        </div>
    )
}

export default ReposId;