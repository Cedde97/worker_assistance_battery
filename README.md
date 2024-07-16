Project created by using https://ionicframework.com/<br />

Requirements to run:<br />
1. Install frameworks by:<br />
```npm install```
2. Run this application on browser by:<br />
```ionic serve```
in the root directoy.<br />

To deploy application on android device (https://ionicframework.com/docs/angular/your-first-app/deploying-mobile):<br />
1. Build the application by:<br />
```ionic build```
2. Add android platform by:<br />
```ionic cap add android```
3. Sync changes to www folder by:<br />
```ionic cap sync```
4. Open android studio to deploy to device by:<br />
```ionic cap open android```
5. Add permissions to android manifest by:<br />
```<uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.FLASHLIGHT"/>
    <meta-data android:name="com.google.mlkit.vision.DEPENDENCIES" android:value="barcode_ui"/>
```

To deploy application on ios device (https://ionicframework.com/docs/angular/your-first-app/deploying-mobile):
1. Build the application by:
```ionic build```
2. Add android platform by:
```ionic cap add ios```
3. Sync changes to www folder by: 
```ionic cap sync```
4. Open Xcode studio to deploy to device by:
```ionic cap open ios```

Landing Page:
![](./readmepics/landing_page.png)

Start assembly instructions:
![](./readmepics/start_assembly.png)

Product information page: 
![](./readmepics/scanned_product_information.png)

To add or change existing workflowsteps go to [this file](https://github.com/Cedde97/worker_assistance_battery/blob/master/src/app/models/ProductWorkflow.ts)
