import "./style.css";

const Header = ({title, myDate}) => (
    <header className="header">
        <h1>{title}</h1>
        <>
        <p>
          Dzisiaj jest {myDate}
        </p></>
      </header>
      
)

export default Header;