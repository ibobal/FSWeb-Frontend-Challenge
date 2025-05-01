import { useSelector, useDispatch } from "react-redux";
import { setTheme, setLanguage } from "../store/reducers/settingsSlice";

export default function Header() {
  const theme = useSelector((state) => state.settings.theme);
  const language = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between bg-transparent z-10 px-20 md:px-40 lg:px-80 py-8">
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
          <span className="label-text text-customPurple font-bold">
            {theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
          </span>
        </label>
      </div>
    </header>
  );
}
