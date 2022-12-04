export interface IFingerprintService {
  getUserToken(): Promise<string>;
}
