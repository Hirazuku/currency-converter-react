import "./style.css";

const Header = ({ title, myDate }) => (
  <header className="header">
    <h1>{title}</h1>
    <>
      <p>
        Dzisiaj jest {myDate.toLocaleString("pl", {
          weekday: "long",
          day: "numeric",
          month: "long",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })}
      </p></>
  </header>

)

export default Header;