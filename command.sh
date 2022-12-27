#!/bin/sh


docker exec lucid_ardinghelli emulator -avd test4 -no-audio -no-boot-anim -accel on -gpu swiftshader_indirect & 
sleep 40s
docker exec lucid_ardinghelli adb -s emulator-5554 install /WhatsApp.apk
sleep 10s
docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -n com.whatsapp/com.whatsapp.Main
sleep 5s
#docker exec lucid_ardinghelli adb -s emulator-5554 shell input keyevent 66  
#docker exec lucid_ardinghelli adb -s emulator-5554 shell input keyevent 66
#docker exec lucid_ardinghelli adb -s emulator-5554 shell input tap 100 580
#docker exec lucid_ardinghelli adb -s emulator-5554 shell input keyevent 21
#docker exec lucid_ardinghelli adb -s emulator-5554 shell input keyevent 67 
#docker exec lucid_ardinghelli adb -s emulator-5554 shell input text "216"
#docker exec lucid_ardinghelli adb -s emulator-5554 shell input text "25858167"