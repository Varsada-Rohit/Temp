import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import AppCard from "./AppCard";
import CustomizeItemModal from "./CustomizeItemModal";

const data = [
  {
    title: "coffe",
    photo:
      "https://images.all-free-download.com/images/graphicthumb/coffee_time_513817.jpg",
    subtitle: "coffe mug",
    price: 100,
  },
  {
    title: "Tea",
    photo:
      "https://lh3.googleusercontent.com/0s--EXi3zgXNGif_mlOu_qMXCDXVi63HNx1YO0tjVqsGv_nGo3uAm3K7NRaP4iJ8nMHJfMGi2rRanL-a_e-NtXWyDrs=w640-h400-e365-rj-sc0x00ffffff",
    subtitle: "simple tea",
    price: 50,
  },
  {
    title: "Masala Tea",
    photo: "https://cdn.wallpapersafari.com/46/69/Wb9n1Y.jpg",
    subtitle: "Masala Tea",
    price: 70,
  },
  {
    title: "Cold Coffe",
    photo:
      "https://hdwallpaperim.com/wp-content/uploads/2017/09/16/52280-coffee-748x468.jpg",
    subtitle: "coffe mug",
    price: 250,
  },
  {
    title: "Hot chocolate",
    photo: "https://i.ytimg.com/vi/1zlIKQtJLuM/maxresdefault.jpg",
    subtitle: "coffe mug chocolate k shs sdhf dfhshf sfdhhds asaf ",
    price: 300,
  },
  {
    title: "cappuccino",
    photo:
      "http://wallpapers.net/web/wallpapers/cup-of-dark-coffee-hd-wallpaper/thumbnail/lg.jpg",
    subtitle: "The Perfect Cappuccino",
    price: 200,
  },
  {
    title: "gur wali chai",
    photo:
      "https://wallup.net/wp-content/uploads/2017/11/22/306078-food-lunch-Oreos-coffee_beans-coffee-748x498.jpg",
    subtitle: "our winter favourite",
    price: 80,
  },
  {
    title: "haldi dooth",
    photo: "https://images8.alphacoders.com/903/thumb-350-903178.jpg",
    subtitle: "the clasic home remedy to boost imunity",
    price: 50,
  },
  {
    title: "Black tea (200ml)",
    photo:
      "https://images.unsplash.com/photo-1555118367-93f01e18660f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    subtitle: "strong dark classic assam tea",
    price: 80,
  },
  {
    title: "Chocolate shake (350ml)",
    photo: "https://www.itl.cat/pngfile/big/205-2059218_black-coffee.jpg",
    subtitle: "an ultimate bliss for all chocolate lover",
    price: 300,
  },
];

export default function Home() {
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [products, setProducts] = useState(data);
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ margin: "30px 0px" }}>
      <Container maxWidth="lg">
        <Grid spacing={2} container>
          {products.map((text, index) => (
            <Grid
              style={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
              key={index.toString()}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <AppCard
                onAddPress={() => {
                  setSelected(index);
                  setCartModalVisible(true);
                }}
                title={text.title}
                subtitle={text.subtitle}
                photo={text.photo}
                price={text.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <CustomizeItemModal
        title={products[selected].title}
        subtitle={products[selected].subtitle}
        price={products[selected].price}
        visible={cartModalVisible}
        closeModal={() => setCartModalVisible(false)}
      />
    </div>
  );
}
