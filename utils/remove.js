export const removeMongoId = (hotelsArray) => {
  const mappedArray = hotelsArray.reduce((acc, cur) => {
    const id = cur?._id.toString();
    cur.id = id;
    delete cur?._id;
    acc.push(cur);

    return acc;
  }, []);

  return mappedArray;
};
