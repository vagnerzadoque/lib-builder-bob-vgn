
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNLibBuilderBobVgnSpec.h"

@interface LibBuilderBobVgn : NSObject <NativeLibBuilderBobVgnSpec>
#else
#import <React/RCTBridgeModule.h>

@interface LibBuilderBobVgn : NSObject <RCTBridgeModule>
#endif

@end
