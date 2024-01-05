import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import tiktokIcon from "../assets/tiktok.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import emailIcon from "../assets/email.svg";

import visaImg from "../assets/visa.png";
import mastercardImg from "../assets/mastercard.png";
import amexImg from "../assets/amex.png";
import cabalImg from "../assets/cabal.png";
import mepaImg from "../assets/mepa.png";
import rapipagolImg from "../assets/rapipago.png";
import pagofacilImg from "../assets/pagofacil.png";
import banelcoImg from "../assets/banelco.png";

import dogCategoryImg from "../assets/dog-category.jpg";
import catCategoryImg from "../assets/cat-category.jpg";

export const navbarCategories = [
  { id: 1, title: "TIENDA" },
  { id: 2, title: "REVENDEDORES" },
  { id: 3, title: "NOSOTROS" },
  { id: 4, title: "CONTACTO" },
];

export const sitemapProductCategories = [
  { id: 1, title: "PERROS" },
  { id: 2, title: "GATOS" },
  { id: 3, title: "HUMANOS" },
];

export const sitemapHelpCategories = [
  { id: 1, title: "PRODUCTOS" },
  { id: 2, title: "DEVOLUCIONES" },
  { id: 3, title: "FORMAS DE ENVÍO" },
];

export const sitemapAboutCategories = [
  { id: 1, title: "NUESTRA HISTORIA" },
  { id: 2, title: "CONTACTO" },
  { id: 3, title: "SER REVENDEDOR" },
];

export const socialsFollow = [
  { id: 1, title: "facebook", src: facebookIcon },
  { id: 2, title: "instagram", src: instagramIcon },
  { id: 3, title: "tiktok", src: tiktokIcon },
];

export const socialsContact = [
  { id: 1, title: "whatsapp", src: whatsappIcon },
  { id: 2, title: "email", src: emailIcon },
];

export const paymentMethods = [
  { id: 1, title: "visa", src: visaImg },
  { id: 2, title: "mastercard", src: mastercardImg },
  { id: 3, title: "american express", src: amexImg },
  { id: 4, title: "cabal", src: cabalImg },
  { id: 5, title: "mercado pago", src: mepaImg },
  { id: 6, title: "rapipago", src: rapipagolImg },
  { id: 7, title: "pagofacil", src: pagofacilImg },
  { id: 8, title: "banelco", src: banelcoImg },
];

export const categoryBanners = [
  {
    id: 1,
    title: "dog banner",
    h2Text: "neo collar",
    pText: "waterproof material",
    btnText: "shop now",
    src: dogCategoryImg,
  },
  {
    id: 2,
    title: "cat banner",
    h2Text: "chew toys",
    pText: "for all types of cats",
    btnText: "view all",
    src: catCategoryImg,
  },
];
