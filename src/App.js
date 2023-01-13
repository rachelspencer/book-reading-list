import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books, 
            { id: Math.round(Math.random() * 999), title }
        ];
        setBooks(updatedBooks);
    };

    return (
        <div>
            {books.length}
            <BookCreate onCreate={createBook} />
        </div>
    );
};

export default App;