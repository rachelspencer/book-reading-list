import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('Need to add book with title of:', title)
    }

    return (
    <BookCreate onCreate={createBook} />
    );
};

export default App;