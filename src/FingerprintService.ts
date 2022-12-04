import { IFingerprintService } from "./IFingerprintService";
import FingerprintJS, { Agent } from "@fingerprintjs/fingerprintjs";

export class FingerprintService implements IFingerprintService {
  private fpPromise: Promise<Agent>;

  public constructor() {
    this.fpPromise = FingerprintJS.load();
  }

  async getUserToken(): Promise<string> {
    const fp = await this.fpPromise;
    const result = await fp.get();
    const visitorId = result.visitorId;
    return visitorId;
  }
}
