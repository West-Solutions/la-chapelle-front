import React from "react";
import PropTypes from "prop-types";

import Home from "@StrapiComponents/Home";
import Link from "@StrapiComponents/Link";
import Title from "@StrapiComponents/Title";
import Image from "@StrapiComponents/Image";
import Columns from "@StrapiComponents/Columns";
import LinkList from "@StrapiComponents/LinkList";
import RichText from "@StrapiComponents/RichText";
import NewsList from "@Components/Strapi/NewsList";
import Trombinoscope from "@StrapiComponents/Trombinoscope";
import ImagesGalery from "@StrapiComponents/ImagesGalery";
import DocumentList from "@StrapiComponents/DocumentList";
//...

const Components = {
  // Text
  "textes.lien": Link,
  "textes.title": Title,
  "textes.rich-text": RichText,
  "textes.liste-de-liens": LinkList,
  // Grid
  "grilles.columns": Columns,
  "grilles.home": Home,
  "grilles.liste-des-actualites": NewsList,
  // Media
  "media.image": Image,
  "media.galerie-d-images": ImagesGalery,
  "media.trombinoscope": Trombinoscope,
  "media.liste-de-documents": DocumentList
  //...
};

const ComponentRenderer = ({ component }) => {
  const { __component } = component;

  // Means it's not a valid component
  if (!__component) return null;
  const Component = Components[__component];

  if (Component) return <Component {...component} />;

  return null;
};

ComponentRenderer.propTypes = {
  component: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    __component: PropTypes.string,
  }).isRequired
};

export default ComponentRenderer;
