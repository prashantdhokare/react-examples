import Home from "../examples/Home";
import Hooks from "../examples/Hooks";
import ApiEx from "../examples/ApiEx";
import CustomFetchApi from "../examples/CustomFetchApi";
import CustomHook from "../examples/CustomHook";
import UseContextEx from "../examples/UseContextEx";
import UseCustomContextEx from "../examples/UseCustomContextEx";
import UseEffectEx from "../examples/UseEffectEx";
import UseReducerEx from "../examples/UseReducerEx";
import UseRefEx from "../examples/UseRefEx";
import UseStateEx from "../examples/UseStateEx";

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/router",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <Hooks />,
  },
];

export const hooksMap = () => {
  const hooksMap = new Map();
  hookSidebarLinks.map((hook) => hooksMap.set(hook.key, hook.main));
  return hooksMap;
};

export const hookSidebarLinks = [
  {
    key: "useStateEx",
    path: "/useStateEx/:totalStars",
    param: "totalStars",
    exact: true,
    to: "/useStateEx/7",
    name: "useState (with path parameter)",
    style: { margin: "10px" },
    main: (props) => <UseStateEx {...props} />,
    sidebar: () => <Hooks />,
  },
  {
    key: "useEffectEx",
    path: "/useEffectEx",
    exact: true,
    to: "/useEffectEx",
    name: "useEffect",
    style: { margin: "10px" },
    main: () => <UseEffectEx />,
    sidebar: () => <Hooks />,
  },
  {
    key: "apiEx",
    path: "/apiEx",
    exact: true,
    to: "/apiEx?per_page=5",
    name: "useEffect with API (with query parameter)",
    style: { margin: "10px" },
    main: () => <ApiEx />,
    sidebar: () => <Hooks />,
  },
  {
    key: "customFetchApi",
    path: "/customFetchApi",
    exact: true,
    to: "/customFetchApi",
    name: "Custom hook with API",
    style: { margin: "10px" },
    main: () => <CustomFetchApi login="test" />,
    sidebar: () => <Hooks />,
  },
  {
    key: "useReducerEx",
    path: "/useReducerEx",
    exact: true,
    to: "/useReducerEx",
    name: "useReducerEx",
    style: { margin: "10px" },
    main: () => <UseReducerEx />,
    sidebar: () => <Hooks />,
  },
  {
    key: "useRefEx",
    path: "/useRefEx",
    exact: true,
    to: "/useRefEx",
    name: "useRefEx",
    style: { margin: "10px" },
    main: () => <UseRefEx />,
    sidebar: () => <Hooks />,
  },
  {
    key: "customHook",
    path: "/customHook",
    exact: true,
    to: "/customHook",
    name: "customHook",
    style: { margin: "10px" },
    main: () => <CustomHook />,
    sidebar: () => <Hooks />,
  },
  {
    key: "useContextEx",
    path: "/useContextEx",
    exact: true,
    to: "/useContextEx",
    name: "useContextEx",
    style: { margin: "10px" },
    main: () => <UseContextEx />,
    sidebar: () => <Hooks />,
  },
  {
    key: "useCustomContextEx",
    path: "/useCustomContextEx",
    exact: true,
    to: "/useCustomContextEx",
    name: "Custom Context Hook",
    style: { margin: "10px" },
    main: () => <UseCustomContextEx />,
    sidebar: () => <Hooks />,
  },
];
