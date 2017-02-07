export class ClientAuthAppDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  private static _msClient: MSClient;
  private static _urlScheme: string;

  public static setAzureConfig(msClient: MSClient, urlScheme: string) {
    this._msClient = msClient;
    this._urlScheme = urlScheme;
  };

  // iOS >= 10
  public applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
    return this.handleIncomingUrl(url);
  }

  // iOS < 10
  public applicationOpenURLSourceApplicationAnnotation?(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean {
    return this.handleIncomingUrl(url);
  };

  private handleIncomingUrl(url: NSURL): boolean {
    if (!ClientAuthAppDelegate._msClient || !ClientAuthAppDelegate._urlScheme) {
      // the delegate wasn't wired to the msClient, that should have resulted in an errormessage already
      console.log("IMPORTANT: Could not complete Azure login flow. Please check previous messages.");
      return false;
    }

    if (url.scheme.toLowerCase() === ClientAuthAppDelegate._urlScheme) {
      ClientAuthAppDelegate._msClient.resumeWithURL(url);
      return true;
    } else {
      return false;
    }
  }
}