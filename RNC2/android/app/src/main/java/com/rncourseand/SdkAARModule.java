package com.rncourseand; // Make sure this matches your project's package structure

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule; 
import com.hongleong.kyc.MobileKycAPI;
import com.hongleong.kyc.interfaces.KycDetailsCallback;
import com.hongleong.kyc.model.KYCProperties;
import com.hongleong.kyc.utils.AppUtils;
import android.util.Log;

// For events

// Import classes from your AAR
// import com.your.aar.library.YourAARClass;

public class SdkAARModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;
    // private YourAARClass aarInstance; // If you need an instance of a class from your AAR

    SdkAARModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        // Initialize your AAR class here if needed
        // aarInstance = new YourAARClass(context);
    }

    @Override
    public String getName() {
        // This name is used in JavaScript to access the module (e.g., NativeModules.YourAARModule)
        return "SdkAARModule";
    }

    // Example of a method exposed to JavaScript that calls AAR functionality
    @ReactMethod
    public void initMobileKycSDK(Promise promise) {
        try {
            MobileKycAPI instance = MobileKycAPI.getInstance(reactContext);
            instance.configureSDK(new KYCProperties("12345", AppUtils.getDeviceId(reactContext)));
            promise.resolve("Mobile KYC SDK initialized successfully");
        } catch (Exception e) {
            promise.reject("SDK_INIT_ERROR", "Failed to initialize Mobile KYC SDK: " + e.getMessage(), e);
        }
    }

    @ReactMethod
    public void startKYCProcess(final Promise promise) {
        MobileKycAPI instance = MobileKycAPI.getInstance(reactContext);
        reactContext.getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                instance.startKYC(new KycDetailsCallback() {

                    @Override
                    public void onKYCSuccess(String json, int status) {
                        promise.resolve("KYC successful"); // Resolve the promise on success
                        Log.d("SdkAARModule", "KYC successful json=" + json + " status=" + status);
                    }

                    @Override
                    public void onKYCFailed(String error) {
                        promise.reject("KYC_FAILED", error); // Reject the promise on failure
                        Log.d("SdkAARModule", "KYC_FAILEDn=" + error );
                    }

                    @Override
                    public void onKYCExit() {
                        promise.resolve("KYC Exited"); 
                        Log.d("SdkAARModule", "KYC Exited" );
                    }
                });
            }
        });
    }

    // Example of sending an event from Native to JavaScript
    private void sendEventToJS(String eventName, String message) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit(eventName, message);
    }

    // You might have a callback from your AAR that you want to send to JS
    /*
    public void onAARCallback(String data) {
        sendEventToJS("onAARDataReceived", data);
    }
    */
}