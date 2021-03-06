import UIKit
import Flutter

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
    var isLandscape:Bool = false
    
    override func application(_ application: UIApplication,didFinishLaunchingWithOptions launchOptions:[UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        GeneratedPluginRegistrant.register(with: self)
        FlutterOrientationPlugin.register(with: self.registrar(forPlugin: "FlutterOrientationPlugin")!)
        self.isLandscape = false
        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
    
    override func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
//        if self.isLandscape {
//            return UIInterfaceOrientationMask.landscapeRight
//        }
//        return UIInterfaceOrientationMask.portrait
//        return UIInterfaceOrientationMask.landscapeRight
        
        if UIDevice.current.userInterfaceIdiom == UIUserInterfaceIdiom.pad {
            if isLandscape {
                return UIInterfaceOrientationMask.landscapeRight
            } else {
                return UIInterfaceOrientationMask.portrait
            }
        } else {
            return UIInterfaceOrientationMask.portrait
        }
    }
    
}
