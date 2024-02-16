import { useRouter } from "next/router";

const ItemDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Details for item {id}</div>;
};

export default ItemDetails;
