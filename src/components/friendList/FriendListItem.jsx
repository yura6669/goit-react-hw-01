import css from './css/FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend__list__item}>
      <img src={avatar} alt={name} className={css.friend__list__item__avatar} />
      <p className={css.friend__list__item__name}>{name}</p>
      <p
        className={
          isOnline
            ? css.friend__list__item__status__online
            : css.friend__list__item__status__offline
        }
      >
        {isOnline ? `Online` : `Offline`}
      </p>
    </div>
  );
};
