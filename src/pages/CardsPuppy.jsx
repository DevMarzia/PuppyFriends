import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

function CardsPuppy() {
  return (
    <>
    <Navbar></Navbar>
    <div className="pt-12">
      <h1>CardsPuppy</h1>
      <p>Cards are a flexible and extensible content container.</p>
      <p>They include options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
      <p>Cards can be organized into card groups or card decks.</p>
    </div>
    
    <Footer></Footer>
    
    </>
  );
}

export default CardsPuppy;