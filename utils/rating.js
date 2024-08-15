export const getRatingDescription = (avgRating) => {
  if (avgRating === 0) {
    return 'No Ratings Available';
  } else if (avgRating > 0 && avgRating <= 2) {
    return 'Poor';
  } else if (avgRating > 2 && avgRating <= 3) {
    return 'Average';
  } else if (avgRating > 3 && avgRating <= 4) {
    return 'Good';
  } else if (avgRating > 4) {
    return 'Very Good';
  }
};

export const findAvgRating = (ratings) => {
  if (ratings.length === 0) return 0;

  let avgRating = 0;

  if (ratings.length === 1) {
    avgRating = ratings[0].rating;
  }
  if (ratings.length > 1) {
    avgRating =
      ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
  }

  return avgRating;
};
