import { GitHubUser } from "../api/types";

export interface ISearchUserState {
  searchUser: string;
  isLoading: boolean;
  user: GitHubUser | null;
  isError: boolean | null;
}

export interface RootState {
  searchUser: ISearchUserState;
}
