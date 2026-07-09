import { Bell, Search } from "lucide-react";
const headerValues = [
  "Home",
  "Shows",
  "Movies",
  "Games",
  "News & Popular",
  "MyList",
  "Browse by Languages",
];
export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center text-primary-text">
      <div className="flex flex-row gap-8 items-center">
        <h4 className="text-3xl text-primary font-bold">StramHub</h4>
        {headerValues.map((header, ind) => (
          <div key={ind}>{header}</div>
        ))}
      </div>
      <div className="flex flex-row gap-8 items-center">
        <button>
          <Search />
        </button>
        <div>Children</div>
        <button>
          <Bell />
        </button>
        <button className="p-4 ">Profile</button>
      </div>
    </div>
  );
};
