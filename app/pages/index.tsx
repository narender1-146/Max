import { GetStaticProps } from "next";

type Profile = {
  id: number;
  name: string;
};

type IndexProps = {
  profiles: Profile[];
};

export const getStaticProps: GetStaticProps = async () => {
  const profiles: Profile[] = [
    { id: 1, name: "Jane Doe" },
    { id: 2, name: "John Doe" },
  ];

  return { props: { profiles } };
};

const Home = ({ profiles }: IndexProps) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold text-gray-800 my-6">
        User Profiles
      </h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="border p-4 rounded-lg shadow-sm">
            {profile.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
