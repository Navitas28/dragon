import React from 'react';
import classes from './ListItem.module.scss';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const listItem = (props) => {
  let listItemData = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
  if (props) {
    listItemData = props.listItems.map((item) => {
      return (
        <li className={classes.ListItem} key={item[0].app_name}>
          <span className={classes.Name}>{item[0].app_name}</span>
          <a
            href={`https://play.google.com/store/apps/details?id=${item[0].package_name}`}
            className={classes.icon}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </li>
      );
    });
  }
  return listItemData;
};
export default listItem;
