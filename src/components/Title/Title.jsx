import "./title.css";
const Title = ({ children }) => {
  return (
    <div className="oases__title">
      <p>{children}</p>
    </div>
  );
};

export default Title;
