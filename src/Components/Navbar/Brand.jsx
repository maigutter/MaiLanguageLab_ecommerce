import brandImage from "../../assets/logo.png";
const Brand = (props) => {
  return (
    <div className="navbar-brand center">
      <img src={brandImage} alt="logo.MaiLanguageLab.1" className="iconImage" />

      <p className="center">{props.BrandName}</p>
    </div>
  );
};
export default Brand;
