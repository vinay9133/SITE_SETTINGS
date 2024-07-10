import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SiteSettingGeneralFlyVi from "./pages/site-setting-general-fly-vi";
import SiteSettingGeneralTeleme from "./pages/site-setting-general-teleme";
import SiteSettingGeneralMiscel from "./pages/site-setting-general-miscel";
import SiteSettingGeneralUnits from "./pages/site-setting-general-units";
import SiteSettingGeneralPlanV from "./pages/site-setting-general-plan-v";
import SiteSettingGeneralADSBV from "./pages/site-setting-general-a-d-s-b-v";
import SiteSettingGeneralRTKVi from "./pages/site-setting-general-r-t-k-vi";
import SiteSettingGeneralAutoco from "./pages/site-setting-general-autoco";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/site-setting-general-telemetry-view":
        title = "";
        metaDescription = "";
        break;
      case "/site-setting-general-miscellaneous-view":
        title = "";
        metaDescription = "";
        break;
      case "/site-setting-general-units-view":
        title = "";
        metaDescription = "";
        break;
      case "/site-setting-general-plan-view":
        title = "";
        metaDescription = "";
        break;
      case "/site-setting-general-adsb-view":
        title = "";
        metaDescription = "";
        break;
      case "/site-setting-general-rtk-view":
        title = "";
        metaDescription = "";
        break;
      case "/site-setting-general-autoconnectview":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SiteSettingGeneralFlyVi />} />
      <Route
        path="/site-setting-general-telemetry-view"
        element={<SiteSettingGeneralTeleme />}
      />
      <Route
        path="/site-setting-general-miscellaneous-view"
        element={<SiteSettingGeneralMiscel />}
      />
      <Route
        path="/site-setting-general-units-view"
        element={<SiteSettingGeneralUnits />}
      />
      <Route
        path="/site-setting-general-plan-view"
        element={<SiteSettingGeneralPlanV />}
      />
      <Route
        path="/site-setting-general-adsb-view"
        element={<SiteSettingGeneralADSBV />}
      />
      <Route
        path="/site-setting-general-rtk-view"
        element={<SiteSettingGeneralRTKVi />}
      />
      <Route
        path="/site-setting-general-autoconnectview"
        element={<SiteSettingGeneralAutoco />}
      />
    </Routes>
  );
}
export default App;
