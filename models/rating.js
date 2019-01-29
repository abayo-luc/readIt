export default (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    'Rating',
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER
    },
    {}
  );
  Rating.associate = function(models) {
    // associations can be defined here
  };
  return Rating;
};