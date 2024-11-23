import HttpService from '../../services/http.service';
import Center from '../models/center.model';
import { CenterLoginRequest } from '../types/center.type';

class CenterService {
  static basePath = '/centers';
  public static async login(data: CenterLoginRequest) {
    const res = await HttpService.post(this.basePath, data);
    return res.data;
  }
  public static async get(data: Center) {
    const res = await HttpService.post(this.basePath, data);
    return res.data;
  }
  public static async put(data: Center) {
    const res = await HttpService.put(this.basePath, data);
    return res.data;
  }
  public static async patch(data: Center) {
    const res = await HttpService.put(this.basePath, data);
    return res.data;
  }
}

export default CenterService;
