import profilePhoto from "../../assets/profilePhoto.png";

const profileStats = [
  { heading: "Posts", value: "100" },
  { heading: "Follower", value: "2,242" },
  { heading: "Following", value: "1,432" },
];

const Header = () => {
  return (
    <header className="flex flex-col items-center space-y-3 lg:space-y-6">
      <div className="flex flex-col items-center space-y-3 lg:space-y-4">
        <img
          src={profilePhoto}
          alt="Rodney Cotton's profile photo"
          className="max-w-[6.25rem] max-h-[6.25rem] lg:max-w-[10rem] lg:max-h-[10rem] rounded-2xl"
        />

        <div className="flex flex-col items-center space-y-1 lg:space-y-2">
          <h1 className="text-sm lg:text-2xl text-[#4E5150] text-center">
            Rodney Cotton
          </h1>
          <p className="text-[#A9A9A9] text-[0.625rem] lg:text-sm text-center">
            Helsinki, Finland
          </p>
        </div>
      </div>

      <div className="flex space-x-3 lg:space-x-6">
        {profileStats.map(({ heading, value }) => (
          <div
            key={heading}
            className="bg-[#E5E5E5] rounded-xl flex flex-col py-3 px-6 w-20 lg:w-24 items-center"
          >
            <h3 className="text-xs text- lg:text-lg text-[#4E5150]">{value}</h3>
            <p className="text-xs lg:text-sm text-[#BDBDBD]">{heading}</p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
