import { http } from '../common/utils/http';

export class RepositoryService {
  _httpService: typeof http;

  constructor() {
    this._httpService = http;
  }

  async findUserRepositories(username: string) {
    const repositories = await http.get(
      `${process.env.REACT_APP_GITHUB_API}/users/${username}/repos`,
    );

    const data = await repositories.data;

    return data;
  }

  async findUserStarredRepositories(username: string) {
    const repositories = await http.get(
      `${process.env.REACT_APP_GITHUB_API}/users/${username}/starred`,
    );

    const data = await repositories.data;

    return data;
  }
}
