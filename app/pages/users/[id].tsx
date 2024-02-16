import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>User profile page for user with ID: {id}</div>;
};

export default UserProfile;
