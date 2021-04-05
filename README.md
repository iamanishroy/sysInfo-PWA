# SysInfo - PWA

SysInfo is a PWA which uses [sysInfo chrome Extension](https://github.com/iamanishroy/sysInfo-chromeExtension) to fetch your system (CPU, memory and storage) information and displays it in the browser/ standalone.

## Important

Currently, the ID of the [chrome extension](https://github.com/iamanishroy/sysInfo-chromeExtension) is temporary. So, I am using [content_script.js](https://github.com/iamanishroy/sysInfo-chromeExtension/blob/main/content-script.js) to fill in the data of the PWA. Once we get a permanent ID we can migrate the [content_script.js](https://github.com/iamanishroy/sysInfo-chromeExtension/blob/main/content-script.js) to the PWA.

## Screenshots

### 🖥️ Desktop

![app on browser](https://github.com/iamanishroy/sysInfo/blob/main/screenshots/ob-w-it.png)

###

![standalone PWA](https://github.com/iamanishroy/sysInfo/blob/main/screenshots/pwa-st.png)

### 📱 Mobile

<img alt="mobile CPU" src="https://github.com/iamanishroy/sysInfo/blob/main/screenshots/pwa-m-cpu.JPG" width=350px />
<img alt="mobile memory&storage" src="https://github.com/iamanishroy/sysInfo/blob/main/screenshots/pwa-m-mem-stor.JPG" width=350px />
