"use client"
export const usePropertyFormat = (property) => {
  const address = property.location;
  const coverPhoto = property.coverPhoto.url;
  const propertyType = property.category;
  const price = property.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  const title = property.title;
  const rooms = property.rooms;
  const baths = property.baths;
  const purpose = property.purpose;
  const sqSize = property.area.toFixed(2);
  const externalID = property.externalID;

  const photos = property.photos?.map((photo) => photo.url);
  const description = property.description;

  const amenities = property.amenities?.flatMap(({ amenities }) =>
    amenities?.map((item) => item.text)
  );


  return {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    amenities,
  };
};
