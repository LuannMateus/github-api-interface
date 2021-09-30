import { http } from '../common/utils/http';

export class RepositoryService {
  _httpService: typeof http;

  constructor() {
    this._httpService = http;
  }

  async findUserRepositories(user: string) {
    const repositories = await http.get(
      `${process.env.REACT_APP_GITHUB_API}/users/${user}/repos`,
    );

    const data = await repositories.data;

    return data;
  }
}
