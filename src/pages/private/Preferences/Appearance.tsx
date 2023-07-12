import { ContainerWithTitle, Heading } from "./styles";
import FlexBox from "../../../components/core/FlexBox";
import ThemeCard from "./components/ThemeCard";
import { ReactComponent as LightTheme } from "../../../assets/icons/light.svg";
import { ReactComponent as DarkTheme } from "../../../assets/icons/dark.svg";
import { ReactComponent as SystemTheme } from "../../../assets/icons/system.svg";
import { Mode, setTheme } from "../../../store/slices/theme.slice";
import { useDispatch, useSelector } from "react-redux";

const themeCardItems = [
  { icon: <LightTheme />, name: "Light" },
  { icon: <DarkTheme />, name: "Dark" },
  { icon: <SystemTheme />, name: "System" },
];

const Appearance: React.FC = () => {
  const dispatch = useDispatch();
  const mode: Mode = useSelector((state: any) => state?.theme?.mode);

  return (
    <ContainerWithTitle title="Appearance">
      <Heading>Theme</Heading>
      <FlexBox gap={15}>
        {themeCardItems.map((item) => (
          <ThemeCard
            key={item.name}
            name={item.name}
            icon={item.icon}
            selected={mode === item.name.toLowerCase()}
            onClick={() => dispatch(setTheme(item.name.toLowerCase() as Mode))}
          />
        ))}
      </FlexBox>
    </ContainerWithTitle>
  );
};

export default Appearance;
