import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <PageTitle title="Welcome!" />
      <ItemListContainer greeting="Welcome to Mai Language Lab" />
      <div className="center">
        <Button colorScheme="blackAlpha" size="lg">
          <Link to={"/coursesShop"}>Go to shop</Link>
        </Button>
      </div>
    </>
  );
}

export default Home;
