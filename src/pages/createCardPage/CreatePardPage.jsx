import axios from "axios";
import { useEffect } from "react";

const CreatePardPage = () => {
  useEffect(() => {
    axios.post("/cards", {
      title: "New Card!!!!!!",
      subtitle: "a test value for new card",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "business1@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://img.izismile.com/img/img13/20201030/640/you_have_never_seen_something_like_this_640_36.jpg",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
    });
  }, []);
  return <h1>yes</h1>;
};

export default CreatePardPage;
