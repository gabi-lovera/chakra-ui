import { useState, useEffect, useContext } from "react";
import { Box, Image, Badge, Grid } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import GoToTop from "../components/GoToTop";
import Swal from "sweetalert2";
import Axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { authState } = useContext(AuthContext);
  const history = useHistory();

  const addCart = (product) => {
    if (authState.id === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Must log in",
        confirmButtonText: "ACCEPT!",
        footer: '<a href="/login">Go to login page</a>',
      });
    } else {
      Axios.post("http://localhost:3001/carts/add", {
        idUser: authState.idUser,
        idProduct: product.idProduct,
      });
    }
  };

  const goProduct = (product) => {
    history.push(`product/${product.idProduct}`);
  };

  useEffect(() => {
    Axios.post("http://localhost:3001/subastas/categoria", {
      categoria: "Arte",
    }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const property = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 5,
      baths: 2,
      title: "Modern home in village",
      formattedPrice: "$1,400.00",
      reviewCount: 44,
      rating: 4.5,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 4,
      baths: 2,
      title: "Modern home in city center",
      formattedPrice: "$1,200.00",
      reviewCount: 33,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 2,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,500.00",
      reviewCount: 33,
      rating: 4,
    },
  ];
  return (
    <Box className="box-home" p="6">
      <Box className="box-home-in" p="6">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {property.map((val, key) => {
            return (
              <Box
                className="box-card"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={val.imageUrl} alt={val.imageAlt} />
                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {val.beds} beds &bull; {val.baths} baths
                    </Box>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {val.title}
                  </Box>
                  <Box>
                    {val.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / wk
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
        <GoToTop />
      </Box>
    </Box>
  );
}
