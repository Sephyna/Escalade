# INSTALL

### 1. Install Scoop

https://scoop.sh/

#### Windows 7

- (Install .NET Framework 4.5)
- Install powershell 7
- Launch powershell (windows Key >> type 'powershell')
- execute `Set-ExecutionPolicy RemoteSigned -scope CurrentUser`
- Do Windows 10 steps (from step 2)

#### Windows 10

- Launch powershell (windows Key >> type 'powershell')
- execute `Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')`

### 2. Install php

- Launch powershell (windows Key >> type 'powershell')
- execute `scoop install php`

### 3. Install mysql

- Go to https://dev.mysql.com/downloads/installer/
- click download on the 427.3 MB file
- execute that file
- Choose Developper Option, then check requirements of all mysql components
- And install https://aka.ms/vs/16/release/vc_redist.x64.exe if Visual Studio C++ is missing
- Ignore if Visual Studio itself, Python 64bit or Microsoft Office is missing, you only need C++ redists
- Reboot if you had to istall vc_redist
- re-execute mysql installer
- Choose Developper Option
- Click "Next" then "Yes" on the "Check requirements" page
- Click "Execute" on the "Installation" page
- Grab a coffee :D
- Click "Next" when finished
- Then "Next"
- Then "Next" on "High Availability"
- Then "Next" on "Type And Networking"
- On "Authentication Method" Choose "Strong" for Win10 "Legacy" for Win7
- Click "Next"
- On "Accounts and Roles" input root password for your mysql server
- Click "Next"
- Then "Next" on "Windows Service"
- Then "Execute" on "Apply Configuration"
- Then "Finish"
- Then "Next" :D
- Then "Finish"
- Then "Next"
- On "Connect to the server" input your previously created root password to check your database connection
- Click "Check"
- Check if it is all green else =/
- Then "Next"
- Then "Execute"
- Then "Finish"
- Then "Next"
- Then "Finish"
- You're Done Mysql opens you a console that you can open with (Windows Key >> `mysqlsh`)
