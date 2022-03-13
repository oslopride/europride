const sortByDate = (item) => {
  const sorted = item.sort((a, b) => {
    return new Date(a.publishedAt) - new Date(b.publishedAt);
  });
  return sorted;
};

export default sortByDate;
