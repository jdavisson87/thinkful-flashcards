// import React, { useState, useEffect } from 'react';
// import { Route, Switch, useParams, useHistory } from 'react-router-dom';
// import { readDeck } from '../../utils/api/index';
// import DeckView from '../../Containers/DeckView/DeckView';
// import CardRoutes from '../CardRoutes/CardRoutes';
// import EditDeck from '../../Containers/EditDeck/EditDeck';
// import Study from '../../Containers/Study/Study';
// import EditCard from '../../Containers/EditCard/EditCard';
// import NewCard from '../../Containers/NewCard/NewCard';

// const DeckRoutes = ({ deleteDeck, setDecks, decks }) => {
//   const [deck, setDeck] = useState({});
//   const { deckId } = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     async function getDeck() {
//       try {
//         const response = await readDeck(deckId);
//         setDeck(response);
//       } catch (error) {
//         alert('Sorry, something went wrong');
//         history.push('/');
//       }
//     }
//     getDeck();
//   }, [deckId, history]);

//   return (
//     <div>
//       <Switch>
//         <Route path={'/decks/:deckId/edit'}>
//           <EditDeck
//             currentDeck={deck}
//             setCurrentDeck={setDeck}
//             setDecks={setDecks}
//             decks={decks}
//           />
//         </Route>
//         <Route path={`/decks/:deckId/cards/:cardId/edit`}>
//           <EditCard deck={deck} />
//         </Route>
//         <Route path={'/decks/:deckId/cards/new'}>
//           <NewCard name={deck.name} />
//         </Route>
//         <Route path={'/decks/:deckId/study'}>
//           <Study />
//         </Route>
//         <Route path={'/decks/:deckId'}>
//           <DeckView
//             deckId={deck.id}
//             name={deck.name}
//             description={deck.description}
//             deleteDeck={deleteDeck}
//           />
//         </Route>
//         <Route>
//           <p>Nothing found</p>
//         </Route>
//       </Switch>
//     </div>
//   );
// };

// export default DeckRoutes;
