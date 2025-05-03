import { useSelector, useDispatch } from "react-redux";
import { setTheme, setLanguage } from "../features/settings/settingsSlice";
import { useEffect } from "react";
import { fetchContentData } from "../features/data/dataSlice";
import { toast } from "react-toastify";

export default function Header() {
  const theme = useSelector((state) => state.settings.theme);
  const language = useSelector((state) => state.settings.language);
  const { loading, error } = useSelector((state) => state.data);
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

  useEffect(() => {
    if (loading === "loading") {
      if (language === "en") {
        toast.info("Loading content...", { autoClose: 1000 });
      } else {
        toast.info("İçerik yükleniyor...", { autoClose: 1000 });
      }
    } else if (loading === "idle" && !error) {
      if (language === "en") {
        toast.success("Content loaded successfully!", { autoClose: 2000 });
      } else {
        toast.success("İçerik başarıyla yüklendi!", { autoClose: 2000 });
      }
    } else if (error) {
      if (language === "en") {
        toast.error(`Error: ${error}`, { autoClose: 3000 });
      } else {
        toast.error(`Hata: ${error}`, { autoClose: 3000 });
      }
    }
  }, [loading, error]);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between bg-transparent z-10 px-6 md:px-20 lg:px-80 py-4 md:py-8">
      <div className="text-xl sm:text-2xl md:text-3xl text-customLime font-bold">
        ibobal
      </div>
      <div className="flex items-center md:space-x-6">
        <button
          className="text-sm sm:text-base md:text-lg text-customLime font-medium hover:opacity-70 p-2 rounded-full transition-all duration-300 cursor-pointer"
          onClick={() => dispatch(setLanguage())}
        >
          {language === "en" ? (
            <p>
              TÜRKÇE<span className="text-gray-300">'YE GEÇ</span>
            </p>
          ) : (
            <p>
              <span className="text-gray-300">SWITCH TO</span> ENGLISH
            </p>
          )}
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
