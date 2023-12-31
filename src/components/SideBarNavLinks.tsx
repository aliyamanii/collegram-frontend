import { NavLink } from "react-router-dom";
import overViewIcon from "../assets/photos/overview.svg";
import peopleIcon from "../assets/photos/people.svg";
import insightIcon from "../assets/photos/insights-audience.svg";
import { INavLink } from "../types/types.ts";

export const items: INavLink[] = [
  { title: "خانه", destinationUrl: "/app/home", icon: overViewIcon },
  { title: "کالج گرامی ها", destinationUrl: "/app/people", icon: peopleIcon },
  {
    title: "کالج گرام من",
    destinationUrl: "/app/profile",
    icon: insightIcon,
  },
];

function SideBarNavLinks({ list }: { list: INavLink[] }) {
  return (
    <div className="inline-flex w-[240px] gap-8 flex-col items-end text-right font-primary">
      {list.map((item) => (
        <NavLink
          to={item.destinationUrl}
          className="flex w-full h-6 justify-end items-start gap-4 self-stretch text-[#C19008]"
          style={({ isActive, isPending }) => {
            return { color: isActive ? "#17494D" : "#C19008" };
          }}
        >
          <div className="h-6 text-sm flex flex-col justify-center ">
            {item.title}
          </div>
          <img src={item.icon}></img>
        </NavLink>
      ))}
    </div>
  );
}

export default SideBarNavLinks;
