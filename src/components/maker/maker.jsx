import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'ckdwls2525@naver.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
    2: {
      id: '2',
      name: 'spearjin',
      company: '기아',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'spear2525@naver.com',
      message: 'go for it',
      fileName: 'spearjin',
      fileURL: 'spearjin.png',
    },
    3: {
      id: '3',
      name: 'yumin',
      company: 'LG',
      theme: 'light',
      title: 'Software Engineer',
      email: 'yumin2525@naver.com',
      message: 'go for it',
      fileName: 'yumin',
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const CreateOrUpdateCard = (card) => {
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated);
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  // 기존의 배열로 해도 되지만 배열의 길이가 많아지면 아무래도 효율성이 떨어진다

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={CreateOrUpdateCard} updateCard={CreateOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
