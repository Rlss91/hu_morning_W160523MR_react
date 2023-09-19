import { Container } from "@mui/material";
import CardComponent from "../components/CardComponent";

let dataFromServer = [
  {
    title: "card 1",
    subTitle: "card 1 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
  {
    title: "card 2",
    subTitle: "card 2 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
  {
    title: "card 3",
    subTitle: "card 3 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
  {
    title: "card 4",
    subTitle: "card 4 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
];

const MapComponent = () => {
  // const createCards = () => {
  //   let cardsArr = [];
  //   for (let item of dataFromServer) {
  //     // nums = [...nums, 1];
  //     cardsArr = [
  //       ...cardsArr,
  //       <CardComponent
  //         title={item.title}
  //         subTitle={item.subTitle}
  //         phone={item.phone}
  //         address={item.address}
  //         cardNumber={item.cardNumber}
  //         img={item.img}
  //         alt={item.alt}
  //       />,
  //     ];
  //   }
  //   return cardsArr;
  // };

  return (
    <Container>
      {dataFromServer.map((item) => (
        <CardComponent
          key={nextKey()}
          title={item.title}
          subTitle={item.subTitle}
          phone={item.phone}
          address={item.address}
          cardNumber={item.cardNumber}
          img={item.img}
          alt={item.alt}
        />
      ))}
    </Container>
  );
};

export default MapComponent;
