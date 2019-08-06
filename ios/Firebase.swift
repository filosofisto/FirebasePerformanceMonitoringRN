//
//  Firebase.swift
//  FirebasePerformanceMonitoringRN
//
//  Created by Eduardo Ribeiro da Silva on 05/08/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import UIKit
import Firebase
import FirebasePerformance

@objc(Firebase)
class Firebase: NSObject {
  
  @objc
  func config() {
    if FirebaseApp.app() == nil {
      FirebaseApp.configure()
    }
  }
  
  @objc
  func customTrace() {
    DispatchQueue.global(qos: .background).async {
      let trace = Performance.startTrace(name: "custom_trace")
      trace?.incrementMetric("custom_trace", by: 1)
      Utils.waitFor(max: 4)
      trace?.stop()
      
//      DispatchQueue.main.async {
//        UIApplication.shared.endIgnoringInteractionEvents()
//
//        Utils.alert(forView: self, message: "Trace generated")
//      }
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

}
