import { FC } from "react";
interface TeamProps {};

export const metadata = {
    title: "Team",
    description: "Team page"
}

const Team: FC<TeamProps> = ({}) => {
  return (
    <main>
      <h1>Team</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quod fugiat soluta, obcaecati ab quibusdam! Natus repellat aut ipsum. Delectus culpa vitae sapiente, fugiat ratione eaque aperiam esse assumenda sint quidem nemo, necessitatibus aliquam iste ducimus incidunt hic officiis minus corporis repellat molestias adipisci harum? Mollitia odio minus voluptas distinctio.
      </p>
    </main>
  )
}

export default Team;