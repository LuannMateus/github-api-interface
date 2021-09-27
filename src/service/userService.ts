import { http } from '../common/utils/http';

class UserService {
  _httpService: typeof http;

  constructor() {
    this._httpService = http;
  }

  async findUser(username: string) {
    const user = await this._httpService.get(
      `${process.env.REACT_APP_GITHUB_API}/users/${username}`,
    );

    const data = await user.data;

    return data;
  }
}

export { UserService };
