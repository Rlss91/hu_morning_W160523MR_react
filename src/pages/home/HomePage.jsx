import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import nextKey from "generate-my-key";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import homePageNormalization from "./homePageNormalization";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";

let initialDataFromServer = [];

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const query = useQueryParams();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        if (userData) data = homePageNormalization(data, userData._id);
        console.log("data", data);
        initialDataFromServer = data;
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  useEffect(() => {
    if (!initialDataFromServer.length) return;
    const filter = query.filter ? query.filter : "";
    console.log("filter", filter);
    setDataFromServer(
      initialDataFromServer.filter((card) => card.title.startsWith(filter))
    );
  }, [query, initialDataFromServer]);
  const handleDeleteCard = (_id) => {
    console.log("_id to delete (HomePage)", _id);
    setDataFromServer((dataFromServerCopy) =>
      dataFromServerCopy.filter((card) => card._id != _id)
    );
    // dataFromServer = dataFromServer.filter((card) => card._id != _id);
    //return true for all the cards that has id that not equal to the id we want to delete
    // console.log("dataFromServer", dataFromServer);
  };
  const handleEditCard = (_id) => {
    // console.log("id to edit", _id);
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {dataFromServer.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              _id={card._id}
              title={card.title}
              subTitle={card.subtitle}
              phone={card.phone}
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              img={card.image.url}
              alt={card.image.alt}
              like={card.likes}
              cardNumber={card.cardNumber}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
