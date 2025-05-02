import { useSelector, useDispatch } from "react-redux";
import { setTheme, setLanguage } from "../store/reducers/settingsSlice";
import { useEffect } from "react";
import { fetchContentData } from "../store/reducers/dataSlice";

export default function Header() {
  const theme = useSelector((state) => state.settings.theme);
  const language = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContentData(language));
  }, [language, dispatch]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
    const toggle = document.querySelector(".theme-controller");
    if (theme === "dark") {
      toggle.checked = true;
    } else {
      toggle.checked = false;
    }
  }, [theme]);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between bg-transparent z-10 px-6 md:px-20 lg:px-80 py-4 md:py-8">
      <div className="text-xl sm:text-2xl md:text-3xl text-customLime font-bold">
        ibobal
      </div>
      <div className="flex items-center md:space-x-6">
        <button
          className="text-sm sm:text-base md:text-lg text-customLime font-medium hover:bg-gray-400 p-2 rounded-full transition-all duration-300"
          onClick={() => dispatch(setLanguage())}
        >
          {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="toggle theme-controller bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-customIndigo checked:[--tglbg:var(--color-blue-900)]"
            onClick={() => dispatch(setTheme())}
          />
          <span className="label-text text-sm sm:text-base md:text-lg text-white md:text-customPurple md:dark:text-white font-bold lg:pr-5">
            {theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
          </span>
        </label>
      </div>
    </header>
  );
}
