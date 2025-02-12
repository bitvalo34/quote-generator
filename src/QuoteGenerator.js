import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";

// Arreglo de citas
const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
];

// Función para seleccionar una cita aleatoria del arreglo
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

function QuoteGenerator() {
  // Estado para almacenar la cita actual
  const [quote, setQuote] = useState(getRandomQuote());

  // Función para actualizar la cita con una nueva aleatoria
  const refreshQuote = () => {
    setQuote(getRandomQuote());
  };

  // useEffect para refrescar la cita automáticamente cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshQuote();
    }, 5000);

    // Función de limpieza para cancelar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    // Caja principal con un fondo degradado
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        {/* Encabezado de la aplicación */}
        <Typography variant="h2" gutterBottom sx={{ color: "#333", mb: 4 }}>
          Quote of the Moment
        </Typography>
        {/* Tarjeta que muestra la cita actual */}
        <Card
          variant="outlined"
          sx={{
            p: 2,
            mb: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <CardContent>
            {/* Texto de la cita */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontStyle: "italic", mb: 2 }}
            >
              "{quote.text}"
            </Typography>
            {/* Autor de la cita */}
            <Typography variant="subtitle1" color="textSecondary">
              - {quote.author}
            </Typography>
          </CardContent>
        </Card>
        {/* Botón para refrescar manualmente la cita */}
        <Button variant="contained" color="primary" onClick={refreshQuote}>
          New Quote
        </Button>
      </Container>
    </Box>
  );
}

export default QuoteGenerator;
