import { GitHubUser } from "../api/types";

export interface ISearchUserState {
  searchUser: string;
  user: GitHubUser | null;
  isError: boolean | null;
}

export interface RootState {
  searchUser: ISearchUserState;
}
