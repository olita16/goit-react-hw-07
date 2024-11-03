import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";
import css from "./App.module.css";

function App() {
  const IsLoading = useSelector(selectLoading);
  const IsError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.headText}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {IsLoading && <h2>Loading...</h2>}
      {IsError && <h2>Error...</h2>}
      <ContactList />
    </div>
  );
}

export default App;
