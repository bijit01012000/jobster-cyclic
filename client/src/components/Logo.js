import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div>
      <img
        style={{ height: "120px", width: "200px" }}
        class="logo"
        src={logo}
        alt="jobster"
        className="logo"
      />
    </div>
  );
};

export default Logo;
