import { useSelector, useDispatch } from "react-redux";
import { setTheme, setLanguage } from "../store/reducers/settingsSlice";

export default function Header() {
  const theme = useSelector((state) => state.settings.theme);
  const language = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between py-8">
      <div className="text-2xl text-customLime font-bold">ibobal</div>
      <div className="flex items-center space-x-6">
        <button
          className="text-sm text-customLime font-medium hover:bg-gray-400 p-2 rounded-full"
          onClick={() => dispatch(setLanguage())}
        >
          {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
        <label className="flex cursor-pointer gap-2">
          <input
            type="checkbox"
            className="toggle theme-controller"
            onClick={() => dispatch(setTheme())}
          />
          <span className="label-text">
            {theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
          </span>
        </label>
      </div>
    </header>
  );
}
