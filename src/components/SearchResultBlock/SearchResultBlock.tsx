import React from 'react';
import classes from './SearchResultBlock.module.scss';

export default function SearchResultBlock({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className={classes.resultBlock}>
      <h4 className={classes.heading}>{title}</h4>
      {children}
    </div>
  );
}
