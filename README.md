# Front-end - Épreuve Intégrée 2021-2022 ATC

## Run project locally

- Install `Windows 10 10.0` on your machine
- I followed the following instructions at [angular.io](https://angular.io/guide/setup-local) to setup my local
  environment
- Install [NodeJS](https://nodejs.org/en/) `v18.9.0 x64`
  - Download the `node-v18.9.0-x64.msi` installer then run it
  - In the installation wizard, avoid unchecking any module (do a full installation)
  - An Administrator Powershell Window should open at the end of the wizard and should install dependencies:
    python3, chocolatey,...
  - Accept all prompts
  - At the end of the installation, you should get:
    ```
    Chocolatey upgraded 18/18 packages.
    See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
    
    Upgraded:
    - chocolatey-dotnetfx.extension v1.0.1
    - visualstudio2019buildtools v16.11.19.0
    - kb3033929 v1.0.5
    - python3 v3.10.7
    - chocolatey-windowsupdate.extension v1.0.4
    - vcredist140 v14.32.31332
    - kb2999226 v1.0.20181019
    - visualstudio-installer v2.0.3
    - kb2919355 v1.0.20160915
    - chocolatey-core.extension v1.4.0
    - kb2919442 v1.0.20160915
    - chocolatey-visualstudio.extension v1.10.2
    - vcredist2015 v14.0.24215.20170201
    - chocolatey-compatibility.extension v1.0.0
    - dotnetfx v4.8.0.20220524
    - visualstudio2019-workload-vctools v1.0.1
    - kb3035131 v1.0.3
    - python v3.10.7
    
    Packages requiring reboot:
    - vcredist140 (exit code 3010)
    
    The recent package changes indicate a reboot is necessary.
    Please reboot at your earliest convenience.
    ```
  - Reboot your machine
  - Run `node -v` in a `cmd.exe` to check your NodeJS installation. You should get:
    ```
    C:\Users\alex>node -v
    v18.9.0
    ```
- On Windows client computers, the execution of PowerShell scripts is disabled by default.  
  To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following
  execution policy:
  - Open a Powershell Administrator terminal and
    run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` then accepts
- Install the Angular CLI (this project was generated using Angular CLI version `14.2.3`)
  - Open a terminal window and run `npm install -g @angular/cli`
- Open a terminal (cmd.exe) at the root of this project
- Run `npm install` to install all dependencies
- Run `ng serve --open` to launch a local server and open a new browser tab at `localhost:4200`
