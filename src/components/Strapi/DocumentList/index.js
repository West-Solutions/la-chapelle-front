import React from "react";
import PropTypes from "prop-types";

import DocumentsServices from "@Services/Documents";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

import ButtonDocument from "@Components/Controls/Button/Document";

const DocumentList = (props) => {
  const { sectionColor, type: rawType } = props;
  const [documents, setDocuments] = React.useState([]);

  const { unifiedType } = fetchFromDataAttribute(rawType) || {};

  React.useEffect(() => {
    if (!unifiedType) return;
    DocumentsServices
      .getByType(unifiedType)
      .then(docs => setDocuments(fetchFromDataAttribute(docs)));
  }
  , [unifiedType]);

  return (
    <div className={"w-full"}>
      {/* Should we add a title */}
      {documents.map(({ id , attributes }) => {
        const media = fetchFromDataAttribute(attributes.media);
        return (
          <ButtonDocument
            key={id}
            color={sectionColor}
            text={attributes.nom}
            src={pathAsAbsolute(media.url)}
          />
        );
      })}
    </div>
  );
};

DocumentList.propTypes = {
  sectionColor: PropTypes.string,
  type: PropTypes.string
};

export default DocumentList;
