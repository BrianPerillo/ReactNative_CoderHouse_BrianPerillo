import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cart.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS cart (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          image TEXT NOT NULL,
          price TEXT NOT NULL,
        )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
    });
  });
  return promise;
}

export const insertProduct = (
  id,
  title,
  image,
  price,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO cart (id, title, image, price) VALUES (?, ?, ?, ?)`,
        [id, title, image, price],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}


export const deleteItem = (
  id
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM cart WHERE id = ` + id.toString(),
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export const fetchCart = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM cart;',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}