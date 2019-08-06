//
//  Firebase.m
//  FirebasePerformanceMonitoringRN
//
//  Created by Eduardo Ribeiro da Silva on 06/08/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Firebase, NSObject)

RCT_EXTERN_METHOD(config)
RCT_EXTERN_METHOD(customTrace)

@end
