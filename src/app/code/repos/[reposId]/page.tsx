import { FC } from "react";

interface ReposIdProps {
    params: {
        reposId: string;
    }
}

const ReposId: FC<ReposIdProps> = ({ params }) => {
    return (
        <div>
            {params.reposId}
        </div>
    )
}

export default ReposId;