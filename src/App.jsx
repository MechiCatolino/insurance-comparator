import { useState } from "react";
import "./App.css";

function App() {

  const [quotes, setQuotes] = useState([]);
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [coverage, setCoverage] = useState("");

  const addQuote = () => {

    if (!company || !price || !coverage) return;

    const newQuote = {
      company,
      price,
      coverage
    };

    setQuotes([...quotes, newQuote]);

    setCompany("");
    setPrice("");
    setCoverage("");
  };

  const sortByPrice = () => {
  const sorted = [...quotes].sort((a, b) => a.price - b.price);
  setQuotes(sorted);
};

const getBestDeal = () => {
  if (quotes.length === 0) return null;

  return quotes.reduce((best, current) =>
    current.price < best.price ? current : best
  );
};

const bestDeal = getBestDeal();

  return (

  

    <div className="container">

      <h1>QuoteWise</h1>
      <p>Insurance Quote Comparison Tool</p>

      {bestDeal && (
  <h3>
    🏆 Best Deal: {bestDeal.company} - ${bestDeal.price}
  </h3>
)}

      <div className="form">

        <input
          placeholder="Insurance company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Coverage"
          value={coverage}
          onChange={(e) => setCoverage(e.target.value)}
        />

        <button onClick={addQuote}>Add Quote</button>

      </div>

 <button onClick={sortByPrice}>Sort by Price</button>

     <table>

  <thead>
    <tr>
      <th>Company</th>
      <th>Price</th>
      <th>Coverage</th>
    </tr>
  </thead>

  <tbody>
    {quotes.map((q, index) => (
      <tr key={index}>
        <td>{q.company}</td>
        <td>${q.price}</td>
        <td>{q.coverage}</td>
      </tr>
    ))}
  </tbody>

</table>

    </div>
  );
}

export default App;

