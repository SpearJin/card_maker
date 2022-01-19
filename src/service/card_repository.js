import firebaseApp from './firebase';

class CardRepository {
  saveCard(userId, card) {
    console.log('ss');
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
