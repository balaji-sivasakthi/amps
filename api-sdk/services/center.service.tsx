import { Center } from '@/db/schema/centers';
import HttpService from '../../services/http.service';

class CenterService {
  static basePath = '/centers';

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
