import { UrlSlugType } from "../../../../utils/enums/UrlSlug.enum";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { ReactNode, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";

export type MenuItemsPropsType = {
  path: string;
  name: string;
  icon: ReactNode;
};

const MenuItems = () => {
  const { pathname } = useLocation();
  const {
    palette: {
      primary: { main },
      text: { secondary },
    },
  } = useTheme();

  const dynamicIconColorChange = useCallback(
    (currentPath: string) => {
      return {
        stroke: pathname.includes(currentPath) ? main : secondary,
      };
    },
    [pathname, main, secondary]
  );
  return [
    {
      path: UrlSlugType.HOME,
      name: "Home",
      icon: (
        <HomeOutlinedIcon style={dynamicIconColorChange(UrlSlugType.HOME)} />
      ),
    },
  ];
};

export default MenuItems;
