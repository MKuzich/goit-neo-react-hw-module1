import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.main}>
        <img src={image} alt="User avatar" className={css.img} />
        <p className={css.title}>{name}</p>
        <p className={css.subtitle}>@{tag}</p>
        <p className={css.subtitle}>{location}</p>
      </div>

      <ul className={css.list}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className={css.item}>
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
