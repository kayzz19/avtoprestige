import "../styles/documents.css";

// Уникальные названия для переменных:
import route1 from "../images/route1.jpg";
import route2 from "../images/route2.jpg";

function RoutesPage() {
  return (
    <main className="main">
      <h1 className="table-title">Информация об учебных маршрутах</h1>
      <section className="info-section">
        <h2>Маршрут №1:</h2>
        <div className="documentsCard">
          <div className="pdf">
            <img src={route1} alt="Маршрут А" className="contacts_map" />
          </div>
        </div>
        <div className="documentsCard">
          <h2>Маршрут №2:</h2>
          <div className="pdf">
            <img src={route2} alt="Маршрут В" className="contacts_map" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default RoutesPage;
