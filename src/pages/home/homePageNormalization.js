const homePageNormalization = (dataFromServer, id) => {
  for (let user of dataFromServer) {
    // if (user.likes.find((userId) => userId === id)) {
    //   user.likes = true;
    // } else {
    //   user.likes = false;
    // }
    user.likes = Boolean(user.likes.find((userId) => userId === id));
  }
  return dataFromServer;
};
export default homePageNormalization;
