import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-69PQVX0XLK");
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
};

export default useTracking;
