const PageTitle = ({ title = "Welcome" }) => {
  return (
    <div className="container pageTitle center">
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
