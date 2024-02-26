const User = ({ item }) => {
  // console.log(item);
  const { image, name, age } = item;
  return (
    <div className="user">
      <img src={image} alt="user image" className="user-img" />
      <div className="user-details">
        <h3 className="user-name">{name}</h3>
        <p className="user-age">{age} Years</p>
      </div>
    </div>
  );
};

export default User;
