// src/coponents/Profile.jsx

import css from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profile__info}>
        <img src={image} alt="User avatar" className={css.profile__avatar} />
        <p className={css.profile__name}>{name}</p>
        <p className={css.profile__tag}>@{tag}</p>
        <p className={css.profile__location}>{location}</p>
      </div>

      <ul className={css.profile__stats}>
        <li className={css.profile__stats__item}>
          <span className={css.profile__stats__item__label}>Followers</span>
          <span className={css.profile__stats__item__quantity}>
            {stats.followers}
          </span>
        </li>
        <li className={css.profile__stats__item}>
          <span className={css.profile__stats__item__label}>Views</span>
          <span className={css.profile__stats__item__quantity}>
            {stats.views}
          </span>
        </li>
        <li className={css.profile__stats__item}>
          <span className={css.profile__stats__item__label}>Likes</span>
          <span className={css.profile__stats__item__quantity}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};
