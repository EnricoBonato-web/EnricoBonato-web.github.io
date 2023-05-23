import React, { useEffect, useState } from "react";
import { fetchApiData } from "../helper/fetchApiData";
import DisplaySortedRepoData from "./DisplaySortedRepoData";

type GetRepoDataProps = {
  userName: string;
  numOfrepos: number;
  showStars: boolean;
  showLanguage: boolean;
};
type RepoData = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string;
};

export function GetRepoData({
  userName,
  numOfrepos,
  showStars,
  showLanguage,
}: GetRepoDataProps) {
  const [repoData, setRepoData] = useState<RepoData[]>([]);

  useEffect(() => {
    fetchApiData(userName).then(setRepoData);
  }, [userName]);

  return (
    <DisplaySortedRepoData
      showLanguage={showLanguage}
      showStars={showStars}
      numOfrepos={numOfrepos}
      repoData={repoData}
    />
  );
}
