import { useSelector, useDispatch } from "react-redux";
import { setTheme, setLanguage } from "../store/reducers/settingsSlice";

export default function Header() {
  const theme = useSelector((state) => state.settings.theme);
  const language = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between px-70 py-8 bg-customIndigo">
      <div className="text-2xl font-bold">ibobal</div>
      <div className="flex items-center space-x-6">
        <button
          className="text-sm text-lime-300 font-medium hover:bg-gray-400 p-2 rounded-full"
          onClick={() => dispatch(setLanguage())}
        >
          {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
        <button onClick={() => dispatch(setTheme())}>
          {theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
        </button>
      </div>
    </header>
  );
}
