import axios from "axios";

const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

// obtener una frase aleatoria
export const getRandomQuote = () => axios.get(url);

// obtener varias frases
export const getMultipleQuotes = (count) => axios.get(`${url}?count=${count}`);

// obtener una frase por personaje
export const getQuotesByCharacter = (character) =>
  axios.get(`${url}?character=${character}`);

// obtener varias frases por personaje
export const getMultipleQuotesByCharacter = (count, character) =>
  axios.get(`${url}?count=${count}&character=${character}`);
