import { useEffect, useState } from "react";
import {
  createFetchUrlForCompanyProfile,
  makeUniqueObjectArray,
} from "../utils/utils";

const useCompanyProfileFetch = (symbols) => {
  const [profileData, setProfileData] = useState([]);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState(null);

  useEffect(() => {
    const callApi = async (symbols) => {
      let resultArr = [];
      try {
        setProfileLoading(true);
        for (const s of symbols) {
          const response = await fetch(createFetchUrlForCompanyProfile(s));
          const company = await response.json();
          resultArr.push(company);
        }
      } catch (err) {
        setProfileError(err);
        console.error(profileError);
      }
      return makeUniqueObjectArray(resultArr);
    };
    callApi(symbols)
      .then((response) => {
        setProfileData(response);
      })
      .then(() => {
        setProfileLoading(false);
      });
  }, [symbols]);

  return { profileData, setProfileData, profileLoading, profileError };
};

export default useCompanyProfileFetch;
