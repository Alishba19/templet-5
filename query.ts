const getAllproductsQuery = `*[_type == "product"] {
    _id,
    title,
    description,
    "imageUrl": productImage.asset->url,
    price,
    tags,
    dicountPercentage,
    isNew
  }`;
  